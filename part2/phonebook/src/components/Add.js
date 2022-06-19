const Add = ({ addNum, newName, handlePbChange, newNumber, handleNbChange }) => {
	return (
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
	);
};
export default Add;
