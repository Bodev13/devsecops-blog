import React from 'react';
import styles from './hero.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <div className={styles.hero__content}>
                    <p className={styles.hero__intro}>Hey there. 👋 I am</p>

                    <h1 className={styles.hero__title}>Bo</h1>

                    <h2 className={styles.hero__subtitle}>DevSecOps Engineer</h2>

                    <p className={styles.hero__text}>
                        Write some information about yourself that is IT related.
                        For example:<br />
                        Lorum Ipsum
                    </p>

                    <a href="#contact" className={styles.hero__button}>
                        Contact me
                    </a>
                </div>

                <div className={styles.hero__imageWrapper}>
                    <img
                        src={useBaseUrl("/img/portfolio/test.png")}
                        alt="Profile"
                        className={styles.hero__image}
                    />
                </div>
            </div>
        </section>
    );
}

