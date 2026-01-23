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
                            Bo
                        </h1>

                        <h2 className={styles.hero__subtitle}>
                            DevSecOps Engineer
                        </h2>

                        <div className={styles.hero__imageWrapperMobile}>
                            <img
                                src={useBaseUrl("/img/portfolio/icons/bo.png")}
                                alt="Profile"
                                className={styles.hero__image}
                            />
                        </div>

                        <p className={styles.hero__text}>
                            I am a DevOps and Linux-focused engineer passionate about building reliable, automated, and scalable systems. I enjoy working with Linux environments, infrastructure, containers, and CI/CD pipelines. I continuously improve my skills, stay up to date with modern DevOps practices, and strive to design efficient and secure system architectures.
                        </p>

                        <a href="#contact" className={styles.hero__button}>
                            Contact me
                        </a>
                    </div>

                    <div className={styles.hero__imageWrapperDesktop}>
                        <img
                            src={useBaseUrl("/img/portfolio/icons/bo.png")}
                            alt="Profile"
                            className={styles.hero__image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

