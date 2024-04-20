import type { priceAPIResponse } from '../../types';
import styles from './currencySection.module.css';

export function CurrencySection({
	currencies,
}: {
	currencies: priceAPIResponse[];
}) {
	const { container, currencyCard, currencyInfo, name, description, price, otherCurrencies } = styles;

	return (
		<section className={container}>
			<div className={otherCurrencies}>
				{currencies.map(({ casa, nombre, compra, venta }) => (
					<article key={casa} className={currencyCard}>
						<h2 className={name}>{nombre}</h2>
						<div className={currencyInfo}>
							<div>
								<h3 className={description}>Compra</h3>
								<span className={price}>${compra}</span>
							</div>
							<div>
								<h3 className={description}>Venta</h3>
								<span className={price}>${venta}</span>
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
