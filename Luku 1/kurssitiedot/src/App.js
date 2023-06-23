const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
};

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part = {props.parts[0]} />
      <Part part = {props.parts[1]} />
      <Part part = {props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
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

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts = {course.parts}/>
      <Total amounts = {[course.parts[0].exercises, course.parts[1]. exercises, course.parts[2].exercises]} />
    </div>
  )
}

export default App