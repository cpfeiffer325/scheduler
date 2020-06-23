import React, { useState } from "react"

import Appointment from './Appointment'
import DayList from './DayList'

import "components/Application.scss"

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
]

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
  const [day, setDay] = useState("Monday")

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
            days={days}
            day={day}
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
