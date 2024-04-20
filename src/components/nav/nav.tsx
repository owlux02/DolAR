import styles from './nav.module.css';

export function Nav() {
	const { nav, links, title } = styles;

	return (
		<nav className={nav}>
			<h1 className={title}>DólAR</h1>

			<div className={links}>
				<a href="">Inicio</a>
				<a href="">Cotizaciones en Euro</a>
				<a href="">Conversión de divisas</a>
			</div>
		</nav>
	);
}
