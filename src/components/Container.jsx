import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import SearchBar from "./SearchBar";

export default function Container() {
	const [peliculaSeleccionada, setPeliculaSeleccionada] = useState([]);

	return (
		<div className="container d-flex flex-column align-items-center gap-4 pt-5">
			<Header />
			<SearchBar setPeliculaSeleccionada={setPeliculaSeleccionada} peliculaSeleccionada={peliculaSeleccionada} />
			<Card peliculaSeleccionada={peliculaSeleccionada} />
		</div>
	);
}
