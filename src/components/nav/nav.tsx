import { useState } from "preact/hooks";
import { Link } from "wouter";
import styles from "./nav.module.css";

export function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const { nav, links, title, linksMobile, menuMobileButton } = styles;

  return (
    <nav className={nav}>
      <h1 className={title}>DólAR</h1>

      <div className={links}>
        <Link href="/">Inicio</Link>
        <Link href="/otrasDivisas">Otras divisas</Link>
        <Link href="/conversor">Conversor</Link>
        <a
          href="https://github.com/martinval11/DolAR"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      <button onClick={() => setOpenMenu(!openMenu)} className={menuMobileButton}>Menu</button>
      <dialog open={openMenu}>
        <article>
          <header>
            <button aria-label="Close" rel="prev" onClick={() => setOpenMenu(false)}></button>
            <p>
              <strong>Menu de Navegación</strong>
            </p>
          </header>

      <div className={linksMobile}>
        <Link href="/" onClick={() => setOpenMenu(false)}>Inicio</Link>
        <Link href="/otrasDivisas" onClick={() => setOpenMenu(false)}>Otras divisas</Link>
        <Link href="/conversor" onClick={() => setOpenMenu(false)}>Conversor</Link>
        <a
          href="https://github.com/martinval11/DolAR"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
        </article>
      </dialog>
    </nav>
  );
}
