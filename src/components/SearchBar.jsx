export default function SearchBar() {
	return (
		<div className="input-group mb-3 w-50">
			<input
				type="text"
				className="form-control"
				placeholder="Escribe el nombre de tu película"
				aria-label="Escribe el nombre de tu película"
				aria-describedby="button-addon2"
			/>
			<button className="btn btn-outline-secondary" type="button" id="button-addon2">
				Enviar
			</button>
		</div>
	);
}
