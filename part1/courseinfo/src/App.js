const Header = (props) => {
	return (
		<div>
			<h1>{props.course.name}</h1>
		</div>
	);
};

const Content = (props) => {
	return (
		<>
			<p>
				{props.parts[0].name} {props.parts[0].exercises}
			</p>
			<p>
				{props.parts[1].name} {props.parts[1].exercises}
			</p>
			<p>
				{props.parts[2].name} {props.parts[2].exercises}
			</p>
		</>
	);
};

const Total = (props) => {
	<p>{props.total}</p>;
};

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	};
	const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;

	return (
		<div>
			<Header course={course} />
			<Content parts={course.parts} />
			<Total parts={total} />
		</div>
	);
};

export default App;
