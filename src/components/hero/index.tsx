import React from 'react';
import styles from './hero.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <p className={styles.intro}>Hey there. 👋 I am</p>

                    <h1 className={styles.title}>Bo</h1>

                    <h2 className={styles.subtitle}>DevSecOps Engineer</h2>

                    <p className={styles.text}>
                        Write some information about yourself that is IT related.
                        For example:<br />
                        Lorum Ipsum
                    </p>

                    <a href="#contact" className={styles.button}>
                        Contact me
                    </a>
                </div>

                <div className={styles.imageWrapper}>
                    <img
                        src={useBaseUrl("/img/portfolio/test.png")}
                        alt="Profile"
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
}
