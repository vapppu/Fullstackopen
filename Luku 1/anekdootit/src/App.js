import { useState } from 'react'

const Button = ({ handleClick, text}) => {
  return (
    <button onClick = {handleClick}>{text}</button>
  )
}

const DisplayVotes = ({ votes }) => {
  return (
    <p>has {votes} votes</p>
  )
}

const Anecdote = ({ text }) => {
  return ( 
    <p>{text}</p>
  )
}

const MostVotedAnecdote = ({ anecdote, votes }) => {
  if (votes === 0)
    return <div>No votes have been given yet.</div>
  return (
    <div>
      <Anecdote text={anecdote}/>
      <DisplayVotes votes={votes} />
    </div>
  )
}

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

  const [points, setPoints] = useState(new Uint8Array(anecdotes.length))
   
  const nextAnecdote = () => {
    setSelected(random())
  }

  const voteSelected = () => {
    const pointsCopy = [...points]
    pointsCopy[selected] += 1
    setPoints(pointsCopy)
  }

  const maxVotes = (Math.max(...points))
  
  const anecdoteWithMaxVotes = () => {
    return anecdotes[points.indexOf(maxVotes)]

  }

  return (
    <div>
      
      <h1>Anecdote of the day</h1>
      <Anecdote text = {anecdotes[selected]} />
      <DisplayVotes votes={points[selected]} />

      <Button handleClick={voteSelected} text="vote"/>
      <Button handleClick={nextAnecdote} text="next anecdote"/>

      <h2>Anecdote with most votes</h2>
      <MostVotedAnecdote anecdote = {anecdoteWithMaxVotes()} votes = {maxVotes}/>

    </div>
  )
}

export default App