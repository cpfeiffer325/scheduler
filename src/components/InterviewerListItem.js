import React from 'react'
import classNames from 'classnames'

import './InterviewerListItem.scss'

export default function InterviewerListItem({ name, avatar, selected, setInterviewer }) {

  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": selected
  })

  const imageClass = classNames("interviewers__item-image", {
    "interviewers__item--selected-image": selected,
  })

  return (
    <li className={interviewerClass} onClick={setInterviewer}>
      <img className={imageClass} src={avatar} alt={name}/>
      {selected && name}
    </li>
  )
}
