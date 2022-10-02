import PropTypes from "prop-types";

function Movie({title, img, summary, genres}){
	return (
		<div style={{width:"90%", marginBottom:"20px", padding:"15px", background:"#E9E9E9", borderRadius:"5px"}}>
			<h2 style={{marginTop:"0px"}}>영화 제목 : {title}</h2>
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
	img : PropTypes.string.isRequired,
	title : PropTypes.string.isRequired,
	summary : PropTypes.string.isRequired,
	genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
