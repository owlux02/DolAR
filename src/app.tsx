import { useEffect, useState } from 'preact/hooks';
import type { priceAPIResponse } from './types';

import { CurrencySection } from './components/currencySection/currencySection';

export function App() {
	const [data, setData]: [priceAPIResponse[], Function] = useState([]);

	const getPriceData = async () => {
		try {
			const response: Response = await fetch('https://dolarapi.com/v1/dolares');
			if (response.ok) {
				const data = await response.json();
				setData(data);

				localStorage.setItem('data', JSON.stringify(data));
			} else {
				throw new Error(`HTTP Error: ${response.status}`);
			}
		} catch (error) {
			console.error(`Error during request: ${error}`);
		}
	};

	useEffect(() => {
		const data = localStorage.getItem('data');
		if (data) {
			setData(JSON.parse(data));
			console.log('ee');
		} else {
			getPriceData();
			console.log('e');
		}
	}, []);

	return <>{data.length > 0 ? <CurrencySection currencies={data} /> : <p>Loading...</p>}</>;
}
