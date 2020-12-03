import React from "react"

import Appointment from './Appointment'
import DayList from './DayList'

import { 
  getAppointmentsForDay, 
  getInterviewersForDay, 
  getInterview 
} from '../helpers/selectors'

import useApplicationData from "hooks/useApplicationData"

import "components/Application.scss"

export default function Application() {
  const {
    bookInterview,
    cancelInterview,
    state,
    setDay
  } = useApplicationData()
  
  const interviewers = getInterviewersForDay(state, state.day)
  const appointments = getAppointmentsForDay(state, state.day).map((appointment) => {
    return (
      <Appointment 
        key={appointment.id} 
        {...appointment} 
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
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
