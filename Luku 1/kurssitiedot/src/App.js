const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
};

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} />
      <Part part = {props.part2} />
      <Part part = {props.part3} />
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>{props.part[0]} {props.part[1]}</p>
    </div>
  )
}

const Total = (props) => {
  let sum = 0
  for (let num of props.amounts) {
    sum += num;
  }
  return (
    <div>
      <p>{sum}</p>
    </div>
  )
}


const App = () => {

  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />

      <Content part1 = {[part1, exercises1]} part2 = {[part2, exercises2]} part3 = {[part3, exercises3]}/>

      <Total amounts = {[exercises1, exercises2, exercises3]} />
    </div>
  )
}

export default App