import React from 'react';
import styles from './hero.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Hero() {
    return (
        <section id="about" className={styles.hero}>
            <div className="contentContainer">
                <div className={styles.hero__container}>
                    <div className={styles.hero__content}>
                        <p className={styles.hero__intro}>Hey there. 👋 I am</p>

                        <h1 className={styles.hero__title}>Bo</h1>

                        <h2 className={styles.hero__subtitle}>DevSecOps Engineer</h2>

                        <div className={styles.hero__imageWrapper}>
                            <img
                                src={useBaseUrl("/img/portfolio/test.png")}
                                alt="Profile"
                                className={styles.hero__image}
                            />
                        </div>

                        <p className={styles.hero__text}>
                            I work with Linux-based systems and modern DevOps tooling,
                            including Python, Git, CI/CD pipelines, GitHub Actions,
                            Docker, and Nginx.
                        </p>

                        <a href="#contact" className={styles.hero__button}>
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
