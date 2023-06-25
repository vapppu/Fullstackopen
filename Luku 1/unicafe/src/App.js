import { useState } from 'react'

const Button = ({onHandle, text}) => {

  return (
      <button onClick = {onHandle}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad

  const countAverage = () => {
    if (total > 0)
      return (((good - bad) / total))
  }

  const countPositive = () => {
    if (total > 0)
      return ((good / total) * 100)
  }

  if (total === 0)
  {
    return (
    <div>
      <h2>Statistics</h2>
      <p>No feedback given</p>
    </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="total" value={total}/>
        <StatisticLine text="average" value={countAverage()}/>
        <StatisticLine text="positive" value={countPositive().toString() + " %"}/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increase = (state, setState) => {
    const newState = state + 1
    setState(newState)
  }


  return (
    <div>
      <h2>Give feedback</h2>
      <Button onHandle={() => increase(good, setGood)} text="good" />
      <Button onHandle={() => increase(neutral, setNeutral)} text="neutral" />
      <Button onHandle={() => increase(bad, setBad)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App