import type { priceAPIResponse } from '../../types';

export function CurrencySection({
	principal,
	others,
}: {
	principal: priceAPIResponse;
	others: priceAPIResponse[];
}) {
	return (
		<section>
			<article className="principal_currency">
				<h2>{principal.nombre}</h2>
				<div>
					<div>
						<h3>Compra</h3>
						<span>{principal.compra}</span>
					</div>
					<div>
						<h3>Venta</h3>
						<span>{principal.venta}</span>
					</div>
				</div>
				<small>Actualizado el {principal.fechaActualizacion}</small>
			</article>
			<article className="other_currencies">
				{others.map((other) => (
					<div key={other.casa}>
						<h2>{other.nombre}</h2>
						<div>
							<div>
								<h3>Compra</h3>
								<span>{principal.compra}</span>
							</div>
							<div>
								<h3>Venta</h3>
								<span>{principal.venta}</span>
							</div>
						</div>
					</div>
				))}
			</article>
		</section>
	);
}
