const Header = (props) => {
  return <h2>{props.course.name}</h2>;
};

const Content = (props) => {
  const courseParts = props.course.parts;

  return courseParts.map((part) => (
    <Part name={part.name} exercises={part.exercises} key={part.name} />
  ));
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  const parts = props.course.parts;
  const sum = parts.reduce((total, part) => total + part.exercises, 0);
  return <p><strong>Total of {sum} exercises</strong></p>;
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default Course;
