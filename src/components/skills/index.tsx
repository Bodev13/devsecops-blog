import React from "react";
import styles from "./skills.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type Skill = {
    name: string;
    icon: string;
    description: string;
};

const skills: Skill[] = [
    {
        name: "HTML",
        icon: "/img/portfolio/icons/html.png",
        description: "Building pages by hand, caring about structure, semantics, accessibility",
    },
    {
        name: "CSS",
        icon: "/img/portfolio/icons/css.png",
        description: "Turning layouts into responsive interfaces with Flexbox and Grid",
    },
    {
        name: "Static Site Generator",
        icon: "/img/portfolio/icons/docusaurus.png",
        description: "Using Docusaurus to assemble documentation and small personal websites",
    },
    {
        name: "Python",
        icon: "/img/portfolio/icons/python.png",
        description: "Solving small problems with scripts and simple backend logic",
    },
    {
        name: "Shell Scripting",
        icon: "/img/portfolio/icons/shell_scripting.png",
        description: "Automating routine tasks with Bash instead of doing them manually",
    },
    {
        name: "YAML",
        icon: "/img/portfolio/icons/yaml.png",
        description: "Wiring configurations together for pipelines and project setups",
    },
    {
        name: "Container",
        icon: "/img/portfolio/icons/docker.png",
        description: "Packing applications into Docker containers to run anywhere",
    },
    {
        name: "CI/CD",
        icon: "/img/portfolio/icons/cicd.png",
        description: "Letting GitHub Actions handle builds, tests, and deployments",
    },
    {
        name: "IT Security",
        icon: "/img/portfolio/icons/security.png",
        description: "Exploring web vulnerabilities through OWASP Juice Shop challenges",
    },
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
                                    <div className={styles.skills__cardContent}>
                                        <img
                                            src={useBaseUrl(skill.icon)}
                                            alt={skill.name}
                                            className={styles.skills__icon}
                                        />
                                        <h3 className={styles.skills__label}>
                                            {skill.name}
                                        </h3>
                                    </div>
                                </div>

                                <div className={styles.skills__cardBack}>
                                    <div className={styles.skills__cardContent}>
                                        <h3 className={styles.skills__label}>
                                            {skill.name}
                                        </h3>
                                        <p className={styles.skills__description}>
                                            {skill.description}
                                        </p>
                                    </div>
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
