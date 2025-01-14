export default function Card(props) {
	return (
		<div className="row gap-5">
			<div className="card" style={{ width: "18rem" }}>
				<img src={props.peliculaSeleccionada} className="card-img-top" alt="..." />
			</div>
			<div className="card" style={{ width: "18rem" }}>
				<img src={props.peliculaSeleccionada} className="card-img-top" alt="..." />
			</div>
			<div className="card" style={{ width: "18rem" }}>
				<img src={props.peliculaSeleccionada} className="card-img-top" alt="..." />
			</div>
		</div>
	);
}
