import { useEffect, useState } from "react";

export default function SearchBar(props) {
	const [inputValue, setInputValue] = useState("matrix");
	const handleClick = (e) => {
		setInputValue(e.target.parentElement.firstChild.value.replaceAll(" ", "+"));
	};

	useEffect(() => {
		const requestOptions = {
			method: "GET",
			redirect: "follow"
		};

		fetch(`http://www.omdbapi.com/?apikey=78b24df6&s=${inputValue}`, requestOptions)
			.then((response) => response.json())
			.then((result) => props.setPeliculaSeleccionada(result.Search[0].Poster))
			.catch((error) => console.error(error));
	}, [inputValue]);

	return (
		<div className="input-group mb-3 w-50">
			<input
				type="text"
				className="form-control"
				placeholder="Escribe el nombre de tu película"
				aria-label="Escribe el nombre de tu película"
				aria-describedby="button-addon2"
			/>
			<button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleClick}>
				Enviar
			</button>
		</div>
	);
}
