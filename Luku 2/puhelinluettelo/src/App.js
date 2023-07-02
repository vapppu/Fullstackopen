import { useState, useEffect } from "react";
import numberService from "./services/numbers";


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
      <form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newName} onChange={props.addName} />
          <br />
          number: <input value={props.newNumber} onChange={props.addNumber} />
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

  const [persons, setPersons] = useState([]);
  const [personsToShow, setPersonsToShow] = useState(persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    numberService
      .getAll()
      .then(initialNumbers => {
        setPersons(initialNumbers)
        setPersonsToShow(initialNumbers)
      })
  }, [])
  
  console.log('render', persons.length, 'persons')


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

    numberService
      .create(newPerson)
      .then(returnedPerson => {
        const newPersons = persons.concat(returnedPerson)
        setPersons(newPersons)
        setPersonsToShow(newPersons)
        setNewNumber("");
        setNewName("");
        setSearchTerm("");      })
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
      <PersonForm addPerson={addPerson} newName={newName} addName={handleNameChange} newNumber={newNumber} addNumber={handleNumberChange}  />

      <h2>Numbers</h2>
      <Persons personList = {persons} personsToShow = {personsToShow} />

    </div>
  );
};

export default App;
