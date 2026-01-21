import { useState } from "react";
import styles from "./header.module.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className="contentContainer">
                <div className={styles.header__content}>
                    <nav className={styles.nav}>
                        <a href="#about">About me</a>
                        <a href="#skills">My skills</a>
                        <a href="#projects">My projects</a>
                        <a href="#contact">Contact</a>
                    </nav>

                    <button
                        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </div>

            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
                <nav className={styles.mobileNav}>
                    <a href="#about" onClick={() => setMenuOpen(false)}>About me</a>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>My skills</a>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>My projects</a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                </nav>
            </div>
        </header>
    );
}
