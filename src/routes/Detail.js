import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Detail(){
	const {id} = useParams();
	const [movie, setMovie] = useState({});
	const getMovie = async () => {
		const json = await(
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		console.log(json.data.movie);
		setMovie(json.data.movie);
	}
	useEffect(() => {
		getMovie();
	}, []);
	return (
		<div>
			<table>
				<tbody>
					<tr>
						<th>영화제목</th>
						<td>{movie.title}</td>
					</tr>
					<tr>
						<th>포스터</th>
						<td><img src={movie.medium_cover_image}/></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Detail;