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
        <h2>{props.course}</h2>
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
        <li>
          {part.name} {part.exercises}
        </li>
    );
  };
  
  const Total = ({course}) => {
    console.log(course);
    const sum = course.parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)
  
    return (
        <p><strong>total of {sum} exercises</strong></p>
    );
  };

export default Course