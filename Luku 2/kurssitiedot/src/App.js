// import Course from './components/Course'

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total course={course} />
    </div>
  );
};

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = ({parts}) => {
  console.log(parts);
  return (
    <ul>
      {parts.map(part => <Part part = {part} key={part.id}/>)}
    </ul>
  );
};

const Part = ({part}) => {
  console.log(part);
  return (
    <div>
      <li>
        {part.name} {part.exercises}
      </li>
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  let sum = 0;
  for (let part of props.course.parts) {
    sum += part.exercises;
  }
  return (
    <div>
      <p>{sum}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Testikurssi',
        exercises: 500,
        id: 4
      }
    ]
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
};

export default App;
