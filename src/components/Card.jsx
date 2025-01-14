export default function Card(props) {
	return (
		<div className="row gap-5">
			<div className="card">
				<img src={props.peliculaSeleccionada} className="card-img-top" alt="..." />
			</div>
			<div className="card">
				<img src={props.peliculaSeleccionada} className="card-img-top" alt="..." />
			</div>
			<div className="card">
				<img src={props.peliculaSeleccionada} className="card-img-top" alt="..." />
			</div>
		</div>
	);
}
