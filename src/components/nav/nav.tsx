import styles from './nav.module.css';

export function Nav() {
	const { nav, links, title } = styles;

	return (
		<nav className={nav}>
			<h1 className={title}>DólAR</h1>

			<div className={links}>
				<a href="/">Inicio</a>
				<a href="https://github.com/martinval11/dolar" target="_blank" rel="noopener noreferrer">
					GitHub
				</a>
			</div>
		</nav>
	);
}
