import { Link } from 'wouter';
import styles from './nav.module.css';

export function Nav() {
	const { nav, links, title } = styles;

	return (
		<nav className={nav}>
			<h1 className={title}>DólAR</h1>

			<div className={links}>
				<Link href="/">Inicio</Link>
				<Link href="/otrasDivisas">Otras divisas</Link>
				<Link href="/conversor">Conversor</Link>
				<a href="https://github.com/martinval11/DolAR" target="_blank" rel="noopener noreferrer">
					GitHub
				</a>
			</div>
		</nav>
	);
}
