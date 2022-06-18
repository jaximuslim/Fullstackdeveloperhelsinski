import { useState } from 'react';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');

	const addNum = (event) => {
		event.preventDefault();
		console.log('button clicked', event.target);
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
	};
	const handlePbChange = (event) => {
		setNewName(event.target.value);
	};
	const handleNbChange = (event) => {
		setNewNumber(event.target.value);
	};
	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addNum}>
				<div>
					name: <input value={newName} onChange={handlePbChange} />
				</div>
				<div>
					number: <input value={newNumber} onChange={handleNbChange}></input>
				</div>
				<div>
					<button type='submit'>add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				{persons.map((person) => (
					<li key={person.name}>
						{person.name} : {person.number}
					</li>
				))}
			</ul>
			...
		</div>
	);
};

export default App;
