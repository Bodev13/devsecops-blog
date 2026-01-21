import React from "react";
import styles from "./hero.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Hero() {
    return (
        <section id="about" className={styles.hero}>
            <div className="contentContainer">
                <div className={styles.hero__container}>
                    <div className={styles.hero__content}>
                        <p className={styles.hero__intro}>
                            Hey there. 👋 I am
                        </p>

                        <h1 className={styles.hero__title}>
                            Felix Walke
                        </h1>

                        <h2 className={styles.hero__subtitle}>
                            DevSecOps Engineer
                        </h2>

                        <p className={styles.hero__text}>
                            Write some information about yourself that is IT related.
                            For example: Why are you passionate about coding?
                            Do you have a deep interest in games? What is your source
                            of inspiration for improving your programming skills?
                            Are you constantly learning and keeping up to date?
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
            </div>
        </section>
    );
}
