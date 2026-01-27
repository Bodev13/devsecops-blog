import { useState, useEffect, useRef } from "react";
import styles from "./header.module.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            // ONLY DESKTOP
            if (window.innerWidth < 1025) return;

            const currentScroll = window.scrollY;

            if (currentScroll > lastScrollY.current && currentScroll > 80) {
                setHidden(true); // scroll down → hide
            } else {
                setHidden(false); // scroll up → show
            }

            lastScrollY.current = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${hidden ? styles.headerHidden : ""}`}>
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

            {/* MOBILE MENU */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
                <button
                    className={styles.closeButton}
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                >
                    ✕
                </button>

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
