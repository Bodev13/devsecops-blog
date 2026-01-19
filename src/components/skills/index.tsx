import React from "react";
import styles from "./skills.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type Skill = {
    name: string;
    icon: string;
    description: string;
};

const skills: Skill[] = [
    { name: "HTML", icon: "/img/portfolio/icons/html.png", description: "Semantic markup, accessibility basics and clean document structure." },
    { name: "CSS", icon: "/img/portfolio/icons/css.png", description: "Modern layouts with Flexbox & Grid, responsive and clean UI design." },
    { name: "Static Site Generator", icon: "/img/portfolio/icons/docusaurus.png", description: "Building documentation and portfolio sites using Docusaurus." },
    { name: "Python", icon: "/img/portfolio/icons/python.png", description: "CLI tools, automation scripts and basic backend logic." },
    { name: "Shell Scripting", icon: "/img/portfolio/icons/shell_scripting.png", description: "Automation, system tasks and environment setup using Bash." },
    { name: "YAML", icon: "/img/portfolio/icons/yaml.png", description: "Configuration files for CI/CD pipelines and infrastructure." },
    { name: "Container", icon: "/img/portfolio/icons/docker.png", description: "Containerizing applications with Docker for local and CI usage." },
    { name: "CI/CD", icon: "/img/portfolio/icons/cicd.png", description: "Automated testing and deployment using GitHub Actions." },
    { name: "IT Security", icon: "/img/portfolio/icons/security.png", description: "Basic web security concepts and hands-on pentesting practice." },
];

const Skills: React.FC = () => {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.skills__content}>
                <h2 className={styles.skills__title}>My skills</h2>

                <div className={styles.skills__grid}>
                    {skills.map((skill) => (
                        <article key={skill.name} className={styles.skills__card}>
                            <div className={styles.skills__cardInner}>
                                <div className={styles.skills__cardFront}>
                                    <img src={useBaseUrl(skill.icon)} alt={skill.name} className={styles.skills__icon} />
                                    <h3 className={styles.skills__label}>{skill.name}</h3>
                                </div>

                                <div className={styles.skills__cardBack}>
                                    <h3 className={styles.skills__label}>{skill.name}</h3>
                                    <p className={styles.skills__description}>{skill.description}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

