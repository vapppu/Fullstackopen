import { useState } from 'react'
import './App.css'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const random = () => {
    const min = Math.ceil(0)
    const max = Math.floor(anecdotes.length)
    return(Math.floor(Math.random() * (max - min) + min)) 
  }
   
  const [selected, setSelected] = useState(random())

  const nextAnecdote = () => {
    setSelected(random())
  }

  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))

  const voteSelected = () => {
    const pointsCopy = [...points]
    pointsCopy[selected] += 1
    setPoints(pointsCopy)
    console.log(selected)
    console.log(pointsCopy)
  }

  const maxVotes = (Math.max(...points))
  
  const anecdoteWithMaxVotes = () => {
    return anecdotes[points.indexOf(maxVotes)]

  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {points[selected]} votes</p>
      <button onClick={voteSelected}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      
      <h2>Anecdote with most votes</h2>
      {anecdoteWithMaxVotes()}
      <p>has {maxVotes} votes</p>

    </div>
  )
}

export default App