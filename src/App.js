import {useState, useEffect} from "react";

function App() {
	const [counter, setValue] = useState(0);
	const [keyword, setKeyword] = useState("");
	const onClick = () => setValue(prev => prev+1);
	const onChange = (event) => setKeyword(event.target.value);
	console.log("i run all the time");
	useEffect(() => {
		console.log("CALL THE API...");
	}, []);
	// keyword가 변화할 때만 실행되도록, deps에 keyword를 넣어준다
	// keyword가 바뀔 때만
	useEffect(() => {
		console.log("SEARCH FOR", keyword);
	}, [keyword]);
	return (
		<div>
			<input type="text" onChange={onChange} value={keyword} placeholder="Search here"/>
			<h1>{counter}</h1>
			<button onClick={onClick}>Click me</button>
		</div>
	);
}

export default App;
