import { useState } from 'react'

const Button = ({onHandle, text}) => {

  return (
    <div>
      <button onClick = {onHandle}>{text}</button>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const increase = (state, setState) => {
    const newState = state + 1
    const updatedTotal = total + 1
    setTotal(updatedTotal)
    setState(newState)
  }

  const countAverage = () => {
    if (total > 0)
      return (((good - bad) / total))
  }

  const countPositive = () => {
    if (total > 0)
      return ((good / total) * 100)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button onHandle={() => increase(good, setGood)} text="good" />
      <Button onHandle={() => increase(neutral, setNeutral)} text="neutral" />
      <Button onHandle={() => increase(bad, setBad)} text="bad" />
      <h2>statistics</h2>
      <p>good {good}<br/>neutral {neutral}<br/>bad {bad}</p>
      <p>total: {total}<br/>average: {countAverage()}</p>
      <p>positive: {countPositive()} %</p>

    </div>
  )
}

export default App