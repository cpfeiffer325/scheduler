import React from 'react'

import Confirm from './Confirm'
import Empty from './Empty'
import Error from './Error'
import Form from './Form'
import Header from './Header'
import Show from './Show'
import Status from './Status'

import useVisualMode from "hooks/useVisualMode"
import "./styles.scss"



export default function Appointment({ 
  bookInterview,
  cancelInterview,
  id,
  interview,
  interviewers,
  time 
}) {
  const CONFIRM = "CONFIRM"
  const CREATE = "CREATE"
  const DELETING = "DELETING"
  const EDIT = "EDIT"
  const EMPTY = "EMPTY"
  const ERROR_DELETE = "ERROR_DELETE"
  const ERROR_SAVE = "ERROR_SAVE"
  const SAVING = "SAVING"
  const SHOW = "SHOW"
  
  const { back, mode, transition } = useVisualMode(interview ? SHOW : EMPTY)

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
    
  const confirm = () => {
    transition(DELETING, true)
    cancelInterview(id)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true))
  }

  const onDelete = () => {
    transition(CONFIRM)
  }

  const onEdit = () => {
    transition(EDIT)
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
          onDelete={onDelete}
          onEdit={onEdit}
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
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete?"
          onConfirm={confirm}
          onCancel={cancel}
        />
      )}
      {mode === DELETING && (
        <Status 
          message={"Deleting Appointment"}
        />
      )}
      {mode === EDIT && (
        <Form
          name={interview.student}
          interviewer={interview.interviewer.id}
          interviewers={interviewers}
          onSave={save}
          onCancel={cancel}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error 
          message={"Could not delete appointment"} onClose={cancel}
        />
      )}
      {mode === ERROR_SAVE && (
        <Error 
          message={"Could not book appointment"} onClose={cancel}
        />
      )}
    </article>
  )
}
