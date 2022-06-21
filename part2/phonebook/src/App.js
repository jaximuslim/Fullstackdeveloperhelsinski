import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Add from './components/Add';
import ShowNumbers from './components/ShowNumbers';
import axios from 'axios';
const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');
	const [filtering, setFiltering] = useState(false);

	useEffect(() => {
		axios.get('http://localhost:3001/persons').then((response) => {
			setPersons(response.data);
		});
	}, []);

	const addNum = (event) => {
		event.preventDefault();
		for (let i = 0; i < persons.length; i++) {
			if (newName === persons[i].name) {
				alert(`${newName} is already added to phonebook`);
				return;
			}
		}
		const phoneObj = {
			name: newName,
			number: newNumber
		};
		setPersons(persons.concat(phoneObj));
		setNewName('');
		setNewNumber('');
	};
	const handlePbChange = (event) => {
		setNewName(event.target.value);
	};
	const handleNbChange = (event) => {
		setNewNumber(event.target.value);
	};
	const handleFilter = (event) => {
		if (event.target.value === '') {
			setFiltering(false);
		} else {
			setFiltering(true);
		}
		setFilter(event.target.value);
	};
	const peopleToShow = filtering
		? persons.filter((person) => person.name.toLocaleUpperCase().includes(filter.toUpperCase()))
		: persons;

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter filter={filter} handleFilter={handleFilter}></Filter>
			<h3>add a new</h3>
			<Add
				addNum={addNum}
				newName={newName}
				handlePbChange={handlePbChange}
				newNumber={newNumber}
				handleNbChange={handleNbChange}
			></Add>
			<h2>Numbers</h2>
			<ShowNumbers peopleToShow={peopleToShow}></ShowNumbers>
		</div>
	);
};

export default App;
