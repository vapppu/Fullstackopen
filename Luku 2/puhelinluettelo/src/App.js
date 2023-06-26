import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [personsToShow, setPersonsToShow] = useState(persons)
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

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
    setPersonsToShow(updatedPersons)
    setNewName("");
    setNewNumber("");
    setSearchTerm("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    const searchString = event.target.value
    setSearchTerm(searchString)
    filterPersons(searchString)
  }

  const filterPersons = (string) => {
    const filteredList = (persons.filter(person => person.name.toLowerCase().includes(string.toLowerCase())))
    setPersonsToShow(filteredList)
  }
  return (
    <div>
      <h1>Phonebook</h1>
      filter shown with <input value={searchTerm} onChange={handleSearchTermChange}/>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}  onChange={handleNameChange} /><br/>
          number: <input value={newNumber}  onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul style= {{ listStyle:"none"}} >
        {personsToShow.map((person) => (
          <li key={person.name}>{person.name}: {person.number}</li>
        ))}
      </ul>
    </div>
  );
};


export default App;
