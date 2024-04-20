import { useEffect, useState } from 'preact/hooks';
import './app.css';

interface priceAPIResponse extends Response {
	compra: number;
	venta: number;
	casa: string;
	nombre: string;
	moneda: string;
	fechaActualizacion: string;
};

export function App() {
	const [data, setData]: [priceAPIResponse[], Function] = useState([]);

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

	return <h1>DólAR</h1>;
}
