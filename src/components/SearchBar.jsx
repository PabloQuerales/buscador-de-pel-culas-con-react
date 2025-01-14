import { useEffect, useState } from "react";

export default function SearchBar(props) {
	const [inputValue, setInputValue] = useState("thriller&type=movie");
	const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10));
	const handleClick = (e) => {
		setInputValue(e.target.parentElement.firstChild.value.replaceAll(" ", "+"));
		setRandomNumber(Math.floor(Math.random() * 10));
	};

	useEffect(() => {
		const requestOptions = {
			method: "GET",
			redirect: "follow"
		};

		fetch(`http://www.omdbapi.com/?apikey=78b24df6&s=${inputValue}`, requestOptions)
			.then((response) => response.json())
			.then((result) => props.setPeliculaSeleccionada(result.Search[randomNumber].Poster))
			.catch((error) => console.error(error));
	}, [inputValue, randomNumber]);

	return (
		<div className="input-group mb-3 w-50">
			<input
				type="text"
				className="form-control"
				placeholder="Escribe el nombre de tu película"
				aria-label="Escribe el nombre de tu película"
				aria-describedby="button-addon2"
			/>
			<button className="btn btn-outline-light" type="button" id="button-addon2" onClick={handleClick}>
				Enviar
			</button>
		</div>
	);
}
