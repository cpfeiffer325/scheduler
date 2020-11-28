import React, { useState, useEffect } from "react"
import axios from 'axios'

import Appointment from './Appointment'
import DayList from './DayList'

import { 
  getAppointmentsForDay, 
  getInterviewersForDay, 
  getInterview 
} from '../helpers/selectors'

import "components/Application.scss"

export default function Application() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  })
  
  const setDay = day => setState({ ...state, day })

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`)
    ]).then(([{data: days}, {data: appointments}, {data: interviewers}]) => {
      setState(prev => ({day: prev.day, days, appointments, interviewers}))
    })
  },[])
  
  const interviewers = getInterviewersForDay(state, state.day)
  const appointments = getAppointmentsForDay(state, state.day).map((appointment) => {
    return (
      <Appointment 
        key={appointment.id} 
        {...appointment} 
        interview={getInterview(state, appointment.interview)}
        interviewers={interviewers}
      />
    )
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
        {appointments}
      </section>
    </main>
  )
}
