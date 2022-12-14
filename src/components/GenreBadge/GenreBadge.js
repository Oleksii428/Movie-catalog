import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export function GenreBadge({movie}) {
	const {genre_ids: movieGenresIds} = movie;
	const {genres} = useSelector(state => state.genreReducer);
	const [currentGenres, setCurrentGenres] = useState([]);
	const currentGenre = localStorage.getItem("genreName");

	useEffect(() => {
		if (currentGenre) {
			setCurrentGenres(genres.filter(genre => movieGenresIds.indexOf(genre.id) !== -1 && genre.name === currentGenre));
		} else {
			setCurrentGenres(genres.filter(genre => movieGenresIds.indexOf(genre.id) !== -1));
		}
	}, [currentGenre, genres, movieGenresIds]);

	return (
		<div className={"badges"}>
			{currentGenres.map((genre) => <div className="badge" key={genre.id}>{genre.name}</div>)}
		</div>
	);
}