export function getAppointmentsForDay(state, weekday) {
  let results = []
  const filteredDay = state.days.filter(day => day.name === weekday)

  if (filteredDay.length === 0) {
    return []
  }

  filteredDay[0].appointments.forEach(day => {
    results.push(state.appointments[day])
  })

  return results
}

export function getInterview(state, interview) {
  if (interview && interview.interviewer) {
    const results = {
      ...interview,
      interviewer: state.interviewers[interview.interviewer]
    }
    return results
  } else {
    return null
  }
}

export function getInterviewersForDay(state, weekday) {
  let results = []
  const filteredDay = state.days.filter(day => day.name === weekday)

  if (filteredDay.length === 0) {
    return []
  }

  filteredDay[0].interviewers.forEach(day => {
    results.push(state.interviewers[day])
  })

  return results
}

