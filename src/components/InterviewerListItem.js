import React from 'react'
import classNames from 'classnames'

import './InterviewerListItem.scss'

export default function InterviewerListItem(props) {
  const interviewersClass = classNames("interviewers", {
    "interviewers__item": !props.selected,
    "interviewers__item--selected": props.selected === true,
  })

  const imageClass = classNames("image", {
    "interviewers__item-image": props,
    "interviewers__item--selected-image": props.selected === true,
  })

  return (
    <li 
      className={interviewersClass}
      onClick={() => props.setInterviewer(props.selected)}
    >
      <img
        className={imageClass}
        src={props.avatar}
        alt={props.name}
      />
      {props.selected ? props.name : null}
    </li>
  )
}
