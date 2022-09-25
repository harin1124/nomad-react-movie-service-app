import {useState, useEffect} from "react";

function App() {
	const [counter, setValue] = useState(0);
	const [keyword, setKeyword] = useState("");
	const onClick = () => setValue(prev => prev+1);
	const onChange = (event) => setKeyword(event.target.value);
	console.log("i run all the time");
	useEffect(() => {
		console.log("i run only once.");
	}, []);
	useEffect(() => {
		console.log("i run when 'keyword' changes.");
	}, [keyword]);
	useEffect(() => {
		console.log("i run when 'counter' changes.");
	}, [counter]);
	// 두 이펙트를 합칠 수 있음
	useEffect(() => {
		console.log("i run when keyword & counter changes.");
	}, [keyword, counter])
	return (
		<div>
			<input type="text" onChange={onChange} value={keyword} placeholder="Search here"/>
			<h1>{counter}</h1>
			<button onClick={onClick}>Click me</button>
		</div>
	);
}

export default App;
