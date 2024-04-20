import { useEffect, useState } from 'preact/hooks';
import type { priceAPIResponse } from './types';

import { CurrencySection } from './components/currencySection/currencySection';

export function App() {
	const [data, setData]: [priceAPIResponse[], Function] = useState([]);

	/*
	const getPriceData = async () => {
		const response: Response = await fetch('https://dolarapi.com/v1/dolares');

		if (response.ok) {
			const data = await response.json();
			setData(data);
			localStorage.setItem('data', JSON.stringify(data));
		}
	};

	useEffect(() => {
		const data = localStorage.getItem('data');
		if (data) {
			setData(JSON.parse(data));
		}
		getPriceData();
	}, []);
*/
	return <CurrencySection principal={data[0]} others={data} />;
}
