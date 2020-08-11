import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Contacts from './components/Contacts';
import AddNewContactForm from './components/AddContactForm';
import personService from './services/persons';
import Notification from './components/Notification';

const App = () => {
  const [ persons, setPersons] = useState([]);

  const [ filteredPersons, setFilteredPersons ] = useState([]); 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState('');
  // Notification useState takes in array. [0] = the message to show, [1] = isError bool
  const [ notificationMessage, setNotificationMessage ] = useState(null);

  useEffect(() => {
    updatePersonsList();
  },[]);

  const handleFilterInputChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
    
    const filteredResults = persons.filter(e => e.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredPersons(filteredResults);
  }

  const handleNameInputChange = (event) => {
    event.preventDefault();
    setNewName(event.target.value);
  }

  const handleNumberInputChange = (event) => {
    event.preventDefault();
    setNewNumber(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if there is already a contact with a given name
    const p = persons.find(p => p.name.toLowerCase() === newName.toLowerCase());

    if(p !== undefined){
      
      //alert(`Person called ${newName} is already in the phonebook!`);

      if(window.confirm(`${p.name} is already in phonebook. Do you want to update the phone number?`)){
        personService.update(p.id, {name: p.name, number: newNumber})
        .then(() => updatePersonsList())
        .catch(() => {
          setNotificationMessage([`Oops.. Something went wrong.`, true])
          setTimeout(() => {
            setNotificationMessage(null);
          }, 3000)
        })
      }
      
    } else{
      const newPerson = {
        name: newName,
        number: newNumber
      }
      personService.create(newPerson)
      .then(() => updatePersonsList())
      .then(() => {
        setNotificationMessage([`${newPerson.name} added to phonebook.`, false])
        setTimeout(() => {
          setNotificationMessage(null);
        }, 3000)
      })
      .catch(() => {
        setNotificationMessage([`Oops.. Something went wrong.`, true])
        setTimeout(() => {
          setNotificationMessage(null);
        }, 3000)
      }) 
      
    }
    
    setNewName('');
    setNewNumber('');
  }

  const showNotification = (message, isError) => {
    setNotificationMessage(message);
  }

  const updatePersonsList = () =>{
    personService.getAll()
      .then(personsData => {
        setPersons(personsData);  
      })
  }

  const handleDeleteButtonClick = (event) => {
    if(window.confirm(`This will remove the contact from phonebook. Are you sure?`)){
      personService.del(event.target.value)
      .then(() => updatePersonsList())
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {notificationMessage ? <Notification message={notificationMessage}/> : null}
      
      <Filter 
        filter={filter} onChange={handleFilterInputChange}
      />
      <h2>Add new contact</h2>
      <AddNewContactForm 
        newName={newName}
        newNumber={newNumber}
        onChangeName={handleNameInputChange}
        onChangeNumber={handleNumberInputChange}
        onSubmit={handleSubmit}
      />

      <h2>Numbers</h2>
      
      <Contacts deleteButton={handleDeleteButtonClick} persons={filter.length > 0 ? filteredPersons : persons}/>
    </div>
  )

}

export default App