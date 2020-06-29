export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) {
    return []
  }

  const filteredAppointments = state.days.find(d => d.name === day)
  if (!filteredAppointments) {
    return []
  }

  const { appointments } = filteredAppointments
  return Object.values(state.appointments)
    .filter((appointment) => appointments.includes(appointment.id))
    .concat([{ key: "last", time: "5pm" }])
}
