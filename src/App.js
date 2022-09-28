import {useState, useEffect} from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async() => {
		const response = await fetch("https://yts.mx/api/v2/list_movies.json?limit=30&sort_by=year");
		const json = await response.json();
		await if(json.data.status === "ok"){
			setMovies(json.data.movies);
		}
		setLoading(false)
	}
	useEffect(() => {
		getMovies();
	}, []);
	console.log(movies);
	return (
		<div>
			{loading ? <h1>Loading...</h1> : null}
		</div>
	);
}

export default App;