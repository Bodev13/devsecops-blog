import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.header__content}>
                <nav className={styles.nav}>
                    <a href="#about">About me</a>
                    <a href="#skills">My skills</a>
                    <a href="#projects">My projects</a>
                    <a href="#contact">Contact</a>
                </nav>

                <button
                    className={styles.burger}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <div
                className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""
                    }`}
            >
                <button
                    className={styles.closeButton}
                    onClick={closeMenu}
                    aria-label="Close menu"
                >
                    ✕
                </button>

                <nav className={styles.mobileNav}>
                    <a href="#about" onClick={closeMenu}>About me</a>
                    <a href="#skills" onClick={closeMenu}>My skills</a>
                    <a href="#projects" onClick={closeMenu}>My projects</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </nav>
            </div>
        </header>
    );
}
