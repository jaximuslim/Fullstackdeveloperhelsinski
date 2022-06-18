import Total from './Total';
const Course = ({ courses }) => {
	return courses.map((course) => (
		<div key={course.id}>
			<h1>{course.name}</h1>
			<ul>
				{course.parts.map((part) => (
					<li key={part.id}>
						{part.name} {part.exercises}
					</li>
				))}
			</ul>
			<h3>
				Total of <Total parts={course.parts}></Total> exercises
			</h3>
		</div>
	));
};
export default Course;
