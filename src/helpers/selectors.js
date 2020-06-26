export function getAppointmentsForDay(state, day) {
  let dayAppointments = []

  if (state.days.length === 0) {
    return dayAppointments
  } else {
    const filteredAppointments = state.days.filter(d => d.name === day)
    if (filteredAppointments.length === 0) {
      return dayAppointments = []
    } else {
      const appointments = filteredAppointments[0].appointments
      for (let appointment of appointments) {
        state.appointments[appointment] ? dayAppointments.push(state.appointments[appointment]) : dayAppointments = []
      }
    }
    return dayAppointments
  }
}
