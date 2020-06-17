import React from 'react'
import classNames from 'classnames'

import './DayListItem.scss'

export default function DayListItem(props) {
  const dayClass = classNames("day", {
    "day-list__item": props,
    "day-list__item--selected": props.selected === true,
    "day-list__item--full": props.spots === 0
  })

  const formatSpots = (props) => {
    if (props.spots !== 0) {
      return `${props.spots} ${props.spots !== 1 ? "spots" : "spot"} remaining`
    } else {
      return "no spots remaining"
    }
  }
  
  return (
    <li 
      className={dayClass}
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props)}</h3>
    </li>
  )
}
