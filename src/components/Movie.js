import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, title, img, summary, genres}){
	return (
		<div style={{width:"90%", marginBottom:"20px", padding:"15px", background:"#E9E9E9", borderRadius:"5px"}}>
			<h2 style={{marginTop:"0px"}}>
				<Link to={`/movie/${id}`}>{title}</Link>
			</h2>
			<img src={img} alt={title + "poster"}/>
			<p>{summary}</p>
			<ul>
				{genres.map((g) => {
					<li key={g}>{g}</li>
				})}
			</ul>
		</div>
	);
}

Movie.propTypes = {
	id : PropTypes.number.isRequired,
	img : PropTypes.string.isRequired,
	title : PropTypes.string.isRequired,
	summary : PropTypes.string.isRequired,
	genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
