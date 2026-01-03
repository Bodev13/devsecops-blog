import React from "react";
import styles from "./skills.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type Skill = {
    name: string;
    icon: string;
};

const skills: Skill[] = [
    { name: "HTML", icon: "/img/portfolio/icons/html.png" },
    { name: "CSS", icon: "img/portfolio/icons/css.png" },
    { name: "Static site generator", icon: "img/portfolio/icons/docusaurus.png" },
    { name: "Python", icon: "img/portfolio//icons/python.png" },
    { name: "Shell scripting", icon: "img/portfolio/icons/shell_scripting.png" },
    { name: "YAML", icon: "img/portfolio/icons/yaml.png" },
    { name: "Container", icon: "img/portfolio/icons/docker.png" },
    { name: "CI/CD with GitHub Actions", icon: "img/portfolio/icons/cicd.png" },
    { name: "IT Security", icon: "img/portfolio/icons/security.png" },
];

const Skills: React.FC = () => {
    return (
        <section className={styles.skills}>
            <h2 className={styles.skills__title}>My skills</h2>

            <div className={styles.skills__grid}>
                {skills.map((skill) => (
                    <div key={skill.name} className={styles.skills__card}>
                        <img
                            src={useBaseUrl(skill.icon)}
                            alt={skill.name}
                            className={styles.skills__icon}
                        />
                        <span className={styles.skills__label}>{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
