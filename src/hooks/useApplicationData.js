import { useState, useEffect } from "react"
import axios from 'axios'

export default function useApplicationData() {
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
    ]).then(([{ data: days }, { data: appointments }, { data: interviewers }]) => {
      setState(prev => ({ day: prev.day, days, appointments, interviewers }))
    })
  }, [])
  
  const bookInterview = (id, interview) => {
    return new Promise((resolve, reject) => {
      const appointment = {
        ...state.appointments[id],
        interview: { ...interview }
      }
  
      const appointments = {
        ...state.appointments,
        [id]: appointment
      }
  
      axios.put(`/api/appointments/${id}`, { interview })
        .then(response => {
          setState({ ...state, appointments })
          resolve()
        })
        .catch(res => {
          reject()
        })
    })
  }
  
  const cancelInterview = (id) => {
    return new Promise((resolve, reject) => {
      const appointment = {
        ...state.appointments[id],
        interview: null
      }
  
      const appointments = {
        ...state.appointments,
        [id]: appointment
      }
  
      axios.delete(`/api/appointments/${id}`)
        .then(response => {
          setState({ ...state, appointments })
          resolve()
        })
        .catch(res => {
          reject()
        })
    })
  }

  return {
    bookInterview,
    cancelInterview,
    setDay,
    state
  }
}
