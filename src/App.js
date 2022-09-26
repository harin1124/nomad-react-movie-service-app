import {useState, useEffect} from "react";

function App() {
	const [todo, setTodo] = useState("");
	const [todos, setTodos] = useState([]);
	const onChange = (event) => setTodo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if(todo === ""){
			return;
		}
		// 기존 값을 가져와서 값을 넣어 새로운 array를 반환
		setTodos((currentArray) => [todo, ...currentArray]);
		setTodo("");
	}

	// [추가기능] 해당 투두 삭제 구현
	const clickItemDelete = (event) => {
		const idx = Number(event.target.parentElement.getAttribute("data-index"));
		setTodos((currentArray) => currentArray.filter((item, index) => index !== idx));
	}
	return (
		<div>
			<h1>My To Dos ({todos.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					onChange={onChange}
					value={todo}
					placeholder="Write your to do..."
				/>
				<button onClick={null}>Add To Do</button>
			</form>
			<hr/>
			{todos.map((item, index) => (
				<li key={index} data-index={index}>
					<span style={{marginRight:"10px"}}>{item}</span>
					<button onClick={clickItemDelete}>delete</button>
				</li>
			))}
		</div>
	)
}

export default App;