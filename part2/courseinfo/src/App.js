const Course = ({ course }) => {
	console.log(course.parts);
	var totalExercises = 0;
	for (let i = 0; i < course.parts.length; i++) {
		totalExercises += course.parts[i].exercises;
	}
	return (
		<div>
			<h1>{course.name}</h1>
			<ul>
				{course.parts.map((part) => (
					<li key={part.id}>
						{part.name} {part.exercises}
					</li>
				))}
			</ul>
			<h3>Total of {totalExercises} exercises</h3>
		</div>
	);
};

const App = () => {
	const course = {
		id: 1,
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
				id: 1
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
				id: 2
			},
			{
				name: 'State of a component',
				exercises: 14,
				id: 3
			}
		]
	};

	return <Course course={course} />;
};

export default App;
