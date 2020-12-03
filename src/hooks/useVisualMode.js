import { useState } from "react"

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial)
  const [history, setHistory] = useState([initial])

  const transition = (newMode, replace = false) => {
    if (replace) {
      setHistory(prev => [...prev])
    } else {
      setHistory(prev => [...prev, mode])
    }
    setMode(newMode)
  }

  const back = () => {
    if (history.length < 1) return
    setMode(history.pop())
  }

  return { 
    back,
    mode,
    transition
  }
}
