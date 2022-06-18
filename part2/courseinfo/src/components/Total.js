const Total = ({ parts }) => {
	const initialValue = 0;
	const totalExercises = parts.reduce((prevValue, nextValue) => prevValue + nextValue.exercises, initialValue);
	return totalExercises;
};

export default Total;
