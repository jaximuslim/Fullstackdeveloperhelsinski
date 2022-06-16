import { useState } from 'react';
const Statistics = ({ good, neutral, bad }) => {
	const total = neutral + bad + good;
	const positivePct = (good / (neutral + bad + good)) * 100 + '%';
	const avg = (good - bad) / (neutral + bad + good);
	console.log(avg);
	if (total === 0) {
		return <h2>No feedback given</h2>;
	}

	return (
		<>
			<table>
				<StatisticLine text='Good' value={good}></StatisticLine>
				<StatisticLine text='Neutral' value={neutral}></StatisticLine>
				<StatisticLine text='Bad' value={bad}></StatisticLine>
				<StatisticLine text='All' value={total}></StatisticLine>
				<StatisticLine text='Average' value={avg}></StatisticLine>
				<StatisticLine text='Positive' value={positivePct}></StatisticLine>
			</table>
		</>
	);
};

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>
				{text} {value}
			</td>
		</tr>
	);
};

const Button = ({ updateRating, text }) => {
	return (
		<>
			<button onClick={updateRating}>{text}</button>
		</>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>Give feedback</h1>
			<Button updateRating={() => setGood(good + 1)} text='Good'></Button>
			<Button updateRating={() => setNeutral(neutral + 1)} text='Neutral'></Button>
			<Button updateRating={() => setBad(bad + 1)} text='Bad'></Button>
			<h1> statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad}></Statistics>
		</div>
	);
};

export default App;
