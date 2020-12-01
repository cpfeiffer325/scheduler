import React, { useState } from 'react'

import Button from '../Button'
import InterviewerList from '../InterviewerList'

export default function Form({
  interviewer: propInterviewer,
  interviewers,
  name: propName,
  onSave,
  onCancel,
}) {

  const [name, setName] = useState(propName || "")
  const [interviewer, setInterviewer] = useState(propInterviewer || null)

  const reset = () => {
    setName("")
    setInterviewer(null)
  }

  const cancel = () => {
    reset()
    onCancel()
  }

  const save = () => {
    onSave(name, interviewer)
  }

  return(
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder={"Enter Student Name"}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </form>
        <InterviewerList interviewers={interviewers} value={interviewer} onChange={setInterviewer} />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger>Cancel</Button>
          <Button onClick={save} confirm>Save</Button>
        </section>
      </section>
    </main>
  )
}
