import { useState, useEffect } from "react";
import numberService from "./services/numbers";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsToShow, setPersonsToShow] = useState(persons);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    numberService.getAll().then((initialNumbers) => {
      setPersons(initialNumbers);
      setPersonsToShow(initialNumbers);
    });
  }, []);

  console.log("render", persons.length, "persons");

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    };

    if (persons.map((person) => person.name).includes(newPerson.name)) {
      if (
        window.confirm(
          `${newPerson.name} is already added on the phonebook. Replace old number with new one?`
        )
      ) {
        const personToUpdate = persons.find(
          (personOnList) => personOnList.name === newPerson.name
        );
        personToUpdate.number = newPerson.number;
        updateNumber(personToUpdate);
      }
      return;
    }

    numberService
      .create(newPerson)
      .then((returnedPerson) => {
        const newPersons = persons.concat(returnedPerson);
        setPersons(newPersons);
        setPersonsToShow(newPersons);
        setNewNumber("");
        setNewName("");
        setSearchTerm("");
        showNotification(`${returnedPerson.name} added to phonebook`, true);
        console.log(
          `${returnedPerson.id}: ${returnedPerson.name} added to list`
        );
      })
      .catch((error) => {
        console.log("Failed to add person to phonebook");
        showNotification(
          `Failed to add ${newPerson.name} to phonebook.`,
          false
        );
      });
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

  const removePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      console.log(`Deleting person: ${person.id} ${person.name}`);
      numberService
        .remove(person.id)
        .then(() => {
          const newPersons = persons.filter(
            (personOnList) => person.id !== personOnList.id
          );
          setPersons(newPersons);
          setPersonsToShow(newPersons);
          console.log(`Person ${person.id}: ${person.name} deleted`);
          showNotification(`${person.name} removed from phonebook.`, true);
        })
        .catch((error) => {
          console.log(`Failed to remove ${person.name} from phonebook.`);
          showNotification(
            `Failed to remove ${person.name} from phonebook.`,
            false
          );
        });
    }
  };

  const updateNumber = (person) => {
    console.log(`Updating number of ${person.id}: ${person.name}`);

    numberService
      .update(person.id, person)
      .then((returned) => {
        console.log(returned);
        const newPersons = persons;
        newPersons[newPersons.indexOf(person)].number = returned.number;
        console.log(newPersons);
        setPersons(newPersons);
        setPersonsToShow(newPersons);
        setNewNumber("");
        setNewName("");
        showNotification(`New number updated for ${person.name}`, true);
      })
      .catch((error) => {
        console.log(`Failed to update number for ${person.name}.`);
        showNotification(`Failed to update number for ${person.name}.`, false);
      });
  };

  const showNotification = (message, success) => {
    setNotificationMessage(message);
    setSuccess(success);
    setTimeout(() => {
      setNotificationMessage(null);
      setSuccess(null);
    }, 5000);
  };

  return (
    <div>
      <h1>Phonebook</h1>

      <Notification message={notificationMessage} success={success} />

      <Filter
        text="Filter shown with "
        searchTerm={searchTerm}
        action={handleSearchTermChange}
      />

      <h2>Add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        addName={handleNameChange}
        newNumber={newNumber}
        addNumber={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons
        personList={persons}
        personsToShow={personsToShow}
        removePerson={removePerson}
      />
    </div>
  );
};

export default App;
