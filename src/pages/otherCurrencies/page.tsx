import { useEffect, useState } from 'preact/hooks';
import type { priceAPIResponse } from '../../types';

import { CurrencySection } from '../../components/currencySection/currencySection';

const getCurrency = async (code: string) => {
	try {
		const response: Response = await fetch(`https://dolarapi.com/v1/cotizaciones/${code}`);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			throw new Error(`HTTP Error: ${response.status}`);
		}
	} catch (error) {
		console.error(`Error during request: ${error}`);
	}
};

export function OtherCurrencies() {
	const [data, setData]: [priceAPIResponse[], Function] = useState([]);

	const getPriceData = async () => {
		try {
			const eur = await getCurrency('eur');
			const brl = await getCurrency('brl');
			const clp = await getCurrency('clp');
			const uyu = await getCurrency('uyu');

			setData([eur, brl, clp, uyu]);
			localStorage.setItem('dataOtherCurrencies', JSON.stringify([eur, brl, clp, uyu]));
		} catch (error) {
			console.error(`Error during request: ${error}`);
		}
	};

	useEffect(() => {
		const data = localStorage.getItem('dataOtherCurrencies');
		if (data) {
			setData(JSON.parse(data));
		} else {
			getPriceData();
		}
	}, []);

	return <>{data.length > 0 ? <CurrencySection currencies={data} /> : <p>Loading...</p>}</>;
}
