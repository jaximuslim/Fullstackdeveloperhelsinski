import { useState } from 'react';
import Filter from './components/Filter';
import Add from './components/Add';
import ShowNumbers from './components/ShowNumbers';
const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
	]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');
	const [filtering, setFiltering] = useState(false);

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
