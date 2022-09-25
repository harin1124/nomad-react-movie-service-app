import {useState, useEffect} from "react";

function App() {
	const [counter, setValue] = useState(0);
	const onClick = () => setValue(prev => prev+1);
	// 코드는 state가 변할 때마다 매번 실행되는 console
	console.log("i run all the time");
	const iRunOnlyOnce = () => {
		// 한 번만 실행되는 console
		console.log("i run only once.");
	}
	useEffect(iRunOnlyOnce, []);
	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={onClick}>Click me</button>
		</div>
	);
}

export default App;
