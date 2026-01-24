import React from "react";
import styles from "./skills.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type Skill = {
    name: string;
    icon: string;
    items: string[];
};

const skills: Skill[] = [
    {
        name: "HTML",
        icon: "/img/portfolio/icons/html.png",
        items: ["Responsive web design"],
    },
    {
        name: "CSS",
        icon: "/img/portfolio/icons/css.png",
        items: ["Styling and layouts"],
    },
    {
        name: "Python",
        icon: "/img/portfolio/icons/python.png",
        items: ["Scripts and backend logic"],
    },
];

const Skills: React.FC = () => {
    const baseUrl = useBaseUrl("/");

    return (
        <section id="skills" className={styles.skills}>
            <div className="contentContainer">
                <h2 className={styles.skills__title}>My skills</h2>

                <div className={styles.skills__grid}>
                    {skills.map((skill) => (
                        <article key={skill.name} className={styles.skills__card}>
                            <div className={styles.skills__cardContent}>
                                <img
                                    src={`${baseUrl}${skill.icon}`}
                                    alt={skill.name}
                                    className={styles.skills__icon}
                                />
                                <h3 className={styles.skills__label}>{skill.name}</h3>
                            </div>

                            <ul className={styles.skills__description}>
                                {skill.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
