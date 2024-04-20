import { Link } from 'wouter';
import notFoundImage from './images/notfound.svg';

import styles from './notFound.module.css';

export function NotFound() {
	const { container, notFoundImg } = styles;

	return (
		<main className={container}>
			<img src={notFoundImage} alt="404 Not found Image" className={notFoundImg} />
			<h1>Página no encontrada</h1>
			<p>¿Escribiste la URL correcta?</p>
			<Link to="/">Volver al inicio</Link>
		</main>
	);
}
