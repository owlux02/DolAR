import { useState } from 'preact/hooks';
import { Link } from 'wouter';
import styles from './nav.module.css';

export function Nav() {
	const [openMenu, setOpenMenu] = useState(false);
	const { nav, links, title, linksMobile, titleLink, menuMobileButton } = styles;

	return (
		<nav className={nav}>
			<h1 className={title}>
				<Link href="/" className={titleLink}>
					DólAR
				</Link>
			</h1>

			<div className={links}>
				<Link href="/">Inicio</Link>
				<Link href="/otrasDivisas">Otras divisas</Link>
				<Link href="/conversor">Conversor</Link>
				<a href="https://github.com/martinval11/DolAR" target="_blank" rel="noopener noreferrer">
					GitHub
				</a>
			</div>

			<button onClick={() => setOpenMenu(!openMenu)} className={menuMobileButton} aria-label="Menu de Navegación">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-menu"
				>
					<line x1="4" x2="20" y1="12" y2="12" />
					<line x1="4" x2="20" y1="6" y2="6" />
					<line x1="4" x2="20" y1="18" y2="18" />
				</svg>
			</button>
			<dialog open={openMenu}>
				<article>
					<header>
						<button aria-label="Close" rel="prev" onClick={() => setOpenMenu(false)}></button>
						<p>
							<strong>Menu de Navegación</strong>
						</p>
					</header>

					<div className={linksMobile}>
						<Link href="/" onClick={() => setOpenMenu(false)}>
							Inicio
						</Link>
						<Link href="/otrasDivisas" onClick={() => setOpenMenu(false)}>
							Otras divisas
						</Link>
						<Link href="/conversor" onClick={() => setOpenMenu(false)}>
							Conversor
						</Link>
						<a href="https://github.com/martinval11/DolAR" target="_blank" rel="noopener noreferrer">
							GitHub
						</a>
					</div>
				</article>
			</dialog>
		</nav>
	);
}
