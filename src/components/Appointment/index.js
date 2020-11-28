import React from 'react'

import Empty from './Empty'
import Form from './Form'
import Header from './Header'
import Show from './Show'

import useVisualMode from "hooks/useVisualMode"
import "./styles.scss"



export default function Appointment({ 
  interview,
  interviewers, 
  time 
}) {
  const CREATE = "CREATE"
  const EMPTY = "EMPTY"
  const SHOW = "SHOW"
  
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY)

  const onAdd = () => {
    transition(CREATE)
  }

  const onCancel = () => {
    back();
  }

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={onAdd} />}
      {mode === SHOW && (
        <Show
          interviewers={interviewers}
          interviewer={interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={interviewers}
          // onSave={onSave} 
          onCancel={onCancel}
        />
      )}
    </article>
  )
}
