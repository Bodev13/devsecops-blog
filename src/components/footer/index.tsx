import React from 'react';
import styles from './footer.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <footer className={styles.siteFooter}>
            <button
                className={styles.toTopBtn}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                ↑
            </button>

            <div className={styles.footerInfo}>
                <p className={styles.footerCopy}>© Bo 2025</p>
                <a
                    className={styles.footerLegal}
                    href={useBaseUrl('/legal-notice')}
                >
                    Legal notice
                </a>
            </div>
        </footer>
    );
};

export default Footer;
