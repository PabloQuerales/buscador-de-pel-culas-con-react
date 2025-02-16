import { useEffect, useState } from "react";

export default function SearchBar(props) {
	const [inputValue, setInputValue] = useState("");
	const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10));
	const [SearchBar, setSearchBar] = useState("");

	async function getMovies() {
		const requestOptions = {
			method: "GET",
			redirect: "follow"
		};
		try {
			const response = await fetch(`http://www.omdbapi.com/?apikey=78b24df6&s=${inputValue}`, requestOptions);
			const result = await response.json();
			if (result.Error == "Movie not found!") {
				alert("Esta película no existe, intenta con el título en ingles :D");
			}
			if (props.peliculaSeleccionada.length < 4) {
				props.setPeliculaSeleccionada([...props.peliculaSeleccionada, result.Search[randomNumber].Poster]);
			}
		} catch (error) {
			console.error(error);
		}
	}
	const handleClick = (e) => {
		setInputValue(e.target.parentElement.firstChild.value.replaceAll(" ", "+"));
		setRandomNumber(Math.floor(Math.random() * 10));
		setSearchBar("");
	};
	const handleChange = (e) => {
		setSearchBar(e.target.value);
	};
	useEffect(() => {
		getMovies();
	}, [inputValue, randomNumber]);

	return (
		<div className="input-group mb-3 w-50">
			<input
				type="text"
				className="form-control"
				placeholder="Escribe el nombre de tu película"
				aria-label="Escribe el nombre de tu película"
				aria-describedby="button-addon2"
				value={SearchBar}
				onChange={handleChange}
			/>
			<button className="btn btn-outline-light" type="button" id="button-addon2" onClick={handleClick}>
				Enviar
			</button>
		</div>
	);
}
