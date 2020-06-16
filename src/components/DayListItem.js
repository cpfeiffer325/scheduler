import React from 'react'

export default function DayListItem(props) {
  return (
    <li onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--ligth">{props.spots}</h3>
    </li>
  )
}
