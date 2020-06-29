import React, { useState, useEffect } from "react"
import axios from 'axios'

import Appointment from './Appointment'
import DayList from './DayList'

import "components/Application.scss"

const appointments = [
  {
    key: 1,
    id: 1,
    time: "10am",
  },
  {
    key: 2,
    id: 2,
    time: "11am",
    interview: {
      student: "Dirt Squirrel",
      interviewer: {
        id: 3,
        name: "Mildred Nazir",
        avatar: "https://i.imgur.com/T2WwVfS.png",
      }
    }
  },
  {
    key: 3,
    id: 3,
    time: "12pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    key: 4,
    id: 4,
    time: "1pm",
  },
  {
    key: 5,
    id: 5,
    time: "2pm",
    interview: {
      student: "Bob Loblaw",
      interviewer: {
        id: 4,
        name: "Cohana Roy",
        avatar: "https://i.imgur.com/FK8V841.jpg",
      }
    }
  },
  {
    key: "last",
    id: 6,
    time: "5pm"
  }
];


export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  })
  
  const setDay = day => setState({ ...state, day })
  const setDays = days => setState(prev => ({ ...prev, days }))

  useEffect(() => {
    axios.get(`/api/days`).then(response => setDays(response.data))
  })

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList 
            days={state.days}
            day={state.day}
            setDay={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointments.map(appointment => <Appointment key={appointment.id} {...appointment} /> )}
      </section>
    </main>
  )
}
