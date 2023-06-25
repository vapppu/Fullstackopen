import { useState } from 'react'

const Button = (props) => {
  <button onClick= {props.handleClick}>{props.text}</button>
}

const Display = (props) => <div>{props.value}</div>

const App = (props) => {

  const [value, setValue] = useState(10)
  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
}
  return (
    <div>
      <Display value={value}/>
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <button onClick={() => setToValue(0)}>reset</button>
      <button onClick={() => setToValue(value + 1)}>increment</button>
    </div>
  )
}
  
export default App;
