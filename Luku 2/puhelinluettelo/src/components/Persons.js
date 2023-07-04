const Persons = (props) => {
  return (
    <ul style={{ listStyle: "none" }}>
      {props.personsToShow.map((person) => (
        <li key={person.id}>
          {person.name}: {person.number}
          <button
            onClick={() => {
              props.removePerson(person);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Persons;
