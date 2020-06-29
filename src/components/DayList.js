import React from 'react'

import DayListItem from './DayListItem'

export default function DayList(state) {
  const days = state.days.map(day => {
    return (
      <DayListItem
        key={day.id}
        id={day.id}
        name={day.name}
        spots={day.spots}
        selected={day.name === state.day}
        setDay={state.setDay}
      />
    )
  })

  return (
    <ul>
      {days}
    </ul>
  )
}
