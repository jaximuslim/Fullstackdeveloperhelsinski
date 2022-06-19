const Filter = ({ filter, handleFilter }) => {
	return (
		<form>
			filter:<input label='filter' value={filter} onChange={handleFilter}></input>
		</form>
	);
};
export default Filter;
