export default function Card(props) {
	return (
		<div className="row gap-5">
			{props.peliculaSeleccionada.map((movie) => {
				return (
					<div className="card" key={1}>
						<img src={movie} className="card-img-top" alt="..." />
					</div>
				);
			})}
		</div>
	);
}
