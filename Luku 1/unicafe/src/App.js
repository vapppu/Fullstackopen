import { useState } from 'react'

const Button = ({onHandle, text}) => {

  return (
    <div>
      <button onClick = {onHandle}>{text}</button>
    </div>
  )
}

const Statistics = ({good, neutral, bad, total}) => {

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
      <h2>Statistics</h2>
      <p>good {good}<br/>neutral {neutral}<br/>bad {bad}</p>
      <p>total: {total}<br/>average: {countAverage()}<br/>
      positive: {countPositive()} %</p>
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


  return (
    <div>
      <h2>Give feedback</h2>
      <Button onHandle={() => increase(good, setGood)} text="good" />
      <Button onHandle={() => increase(neutral, setNeutral)} text="neutral" />
      <Button onHandle={() => increase(bad, setBad)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
    </div>
  )
}

export default App