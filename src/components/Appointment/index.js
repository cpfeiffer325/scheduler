import React from 'react'

import Empty from './Empty'
import Form from './Form'
import Header from './Header'
import Show from './Show'
import Status from './Status'

import useVisualMode from "hooks/useVisualMode"
import "./styles.scss"



export default function Appointment({ 
  bookInterview,
  id,
  interview,
  interviewers,
  time 
}) {
  const CREATE = "CREATE"
  const EMPTY = "EMPTY"
  const ERROR_SAVE = "ERROR_SAVE"
  const SAVING = "SAVING"
  const SHOW = "SHOW"
  
  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY)

  const add = () => {
    transition(CREATE)
  }
  
  const cancel = () => {
    back();
  }
  
  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    }
    
    transition(SAVING)
    bookInterview(id, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true))
  }

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && (
        <Empty onAdd={add}
      />
      )}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form
          interviewers={interviewers}
          onSave={save} 
          onCancel={cancel}
        />
      )}
      {mode === SAVING && (
        <Status 
          message={"Saving Appointment"}
        />
      )}
    </article>
  )
}
