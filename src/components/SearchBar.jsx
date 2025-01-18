import { useEffect, useState } from "react";

export default function SearchBar(props) {
	const [inputValue, setInputValue] = useState("");
	const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10));
	const [SearchBar, setSearchBar] = useState("");

	function getMovies() {
		const requestOptions = {
			method: "GET",
			redirect: "follow"
		};

		fetch(`http://www.omdbapi.com/?apikey=78b24df6&s=${inputValue}`, requestOptions)
			.then((response) => response.json())
			.then((result) => {
				if (props.peliculaSeleccionada.length < 4) {
					props.setPeliculaSeleccionada([...props.peliculaSeleccionada, result.Search[randomNumber].Poster]);
				}
			})
			.catch((error) => console.error(error));
	}
	const handleClick = (e) => {
		setInputValue(e.target.parentElement.firstChild.value.replaceAll(" ", "+"));
		setRandomNumber(Math.floor(Math.random() * 10));
		setSearchBar("");
	};
	const handleChange = (e) => {
		console.log(e.target.value);
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
