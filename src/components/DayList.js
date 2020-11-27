import React from 'react'

import DayListItem from './DayListItem'

export default function DayList({ day, days, setDay }) {
  const dayList = days.map(item => (
    <DayListItem
      key={item.id}
      name={item.name}
      spots={item.spots}
      selected={item.name === day}
      setDay={setDay}
    />
  ))
  return <ul> {dayList }</ul>
}
