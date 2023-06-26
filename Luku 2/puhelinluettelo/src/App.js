import { useState } from "react";

const Filter = (props) => {
  return (
    <div>
      {props.text}
      <input value={props.searchTerm} onChange={props.action} />
    </div>
  )
}

const PersonForm = (props) => {

  return (
    <div>
      <form onSubmit={props.add}>
        <div>
          name: <input value={props.newName} onChange={props.nameAction} />
          <br />
          number: <input value={props.newNumber} onChange={props.numberAction} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
  }

const Persons = (props) => {
  return (
    <ul style={{ listStyle: "none" }}>
    {props.personsToShow.map((person) => (
      <li key={person.name}>
        {person.name}: {person.number}
      </li>
    ))}
  </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [personsToShow, setPersonsToShow] = useState(persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    if (persons.map((person) => person.name).includes(newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const updatedPersons = persons.concat(newPerson);
    setPersons(updatedPersons);
    setPersonsToShow(updatedPersons);
    setNewNumber("");
    setNewName("");
    setSearchTerm("");

  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    const searchString = event.target.value;
    setSearchTerm(searchString);
    filterPersons(searchString);
  };

  const filterPersons = (string) => {
    const filteredList = persons.filter((person) =>
      person.name.toLowerCase().includes(string.toLowerCase())
    );
    setPersonsToShow(filteredList);
  };
  return (
    <div>

      <h1>Phonebook</h1>
      <Filter text="filter shown with " searchTerm = {searchTerm} action = {handleSearchTermChange}/>

      <h2>Add a new</h2>
      <PersonForm add={addPerson} newName={newName} nameAction={handleNameChange} newNumber={newNumber} numberAction={handleNumberChange}  />

      <h2>Numbers</h2>
      <Persons personList = {persons} personsToShow = {personsToShow} />

    </div>
  );
};

export default App;
