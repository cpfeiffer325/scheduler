import React from 'react'
import classNames from 'classnames'

import './InterviewerListItem.scss'

export default function InterviewerListItem(props) {
  const interviewerClass = classNames("interviewers", {
    "interviewers__item": !props.selected,
    "interviewers__item--selected": props.selected === true,
  })

  const imageClass = classNames("image", {
    "interviewers__item-image": props,
    "interviewers__item--selected-image": props.selected === true,
  })

  return (
    <li 
      className={interviewerClass}
      onClick={props.setInterviewer}
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
