import { useState, useEffect } from 'react';

const App = () => {
	const [filter, setFilter] = useState('');
	const [filtering, setFiltering] = useState(false);
	const handleFilter = (event) => {
		if (event.target.value === '') {
			setFiltering(false);
		} else {
			setFiltering(true);
		}
		setFilter(event.target.value);
		console.log(filter);
	};

	// const countriesToShow = filtering
	// 	? persons.filter((person) => person.name.toLocaleUpperCase().includes(filter.toUpperCase()))
	// 	: persons;
	return (
		<form>
			filter:<input label='filter' value={filter} onChange={handleFilter}></input>
		</form>
	);
};

export default App;
