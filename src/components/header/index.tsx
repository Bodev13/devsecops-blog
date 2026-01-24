import { useState, useEffect } from "react";
import styles from "./header.module.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [hideHeader, setHideHeader] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide when scrolling down, show when scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setHideHeader(true);
            } else {
                setHideHeader(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`${styles.header} ${hideHeader ? styles.headerHidden : ""}`}>
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
