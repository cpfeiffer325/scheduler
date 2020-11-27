import React from 'react'

import './InterviewerListItem'
import './InterviewerList.scss'
import InterviewerListItem from './InterviewerListItem'
import PropTypes from 'prop-types'

InterviewerList.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default function InterviewerList({ interviewers, value, onChange }) {
  const interviewerList = interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === value}
        setInterviewer={() => onChange(interviewer.id)}
      />
    )
  })

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewerList}
      </ul>
    </section>
  )
}
