import React, { useState } from "react";
import styles from "./skills.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type Skill = {
    name: string;
    icon: string;
    items: string[];
};

const SKILLS: Skill[] = [
    {
        name: "HTML",
        icon: "/img/portfolio/icons/html.png",
        items: [
            "User-friendly navigation",
            "Responsive web design",
            "Forms & login pages",
            "Hover & animations",
        ],
    },
    {
        name: "CSS",
        icon: "/img/portfolio/icons/css.png",
        items: [
            "Flexbox & Grid",
            "Responsive layouts",
            "UI animations",
            "Transitions & effects",
        ],
    },
    {
        name: "Static site",
        icon: "/img/portfolio/icons/docusaurus.png",
        items: [
            "Static site generation",
            "Tags & categories",
            "RSS & SEO",
            "Localization",
        ],
    },
    {
        name: "Python",
        icon: "/img/portfolio/icons/python.png",
        items: ["Scripts and simple backend logic"],
    },
    {
        name: "Shell scripting",
        icon: "/img/portfolio/icons/shell_scripting.png",
        items: ["Automation with Bash"],
    },
    {
        name: "YAML",
        icon: "/img/portfolio/icons/yaml.png",
        items: ["Pipeline and config wiring"],
    },
    {
        name: "Container",
        icon: "/img/portfolio/icons/docker.png",
        items: ["Docker containers"],
    },
    {
        name: "CI/CD",
        icon: "/img/portfolio/icons/cicd.png",
        items: ["GitHub Actions pipelines"],
    },
    {
        name: "IT Security",
        icon: "/img/portfolio/icons/security.png",
        items: ["OWASP Juice Shop practice"],
    },
];

const chunk = <T,>(arr: T[], size: number): T[][] =>
    arr.reduce((acc, _, i) => {
        if (i % size === 0) acc.push(arr.slice(i, i + size));
        return acc;
    }, [] as T[][]);

const grouped = chunk(SKILLS, 3);

export default function Skills() {
    const [page, setPage] = useState(0);
    const totalPages = grouped.length;

    return (
        <section id="skills" className={styles.skills}>
            <div className="contentContainer">
                <div className={styles.skills__content}>
                    <h2 className={styles.skills__title}>My skills</h2>

                    {/* DESKTOP */}
                    <div className={styles.skills__grid}>
                        {SKILLS.map((skill) => (
                            <article key={skill.name} className={styles.skills__card}>
                                <div className={styles.skills__cardInner}>
                                    <div className={styles.skills__cardFront}>
                                        <div className={styles.skills__cardContent}>
                                            <img
                                                src={useBaseUrl(skill.icon)}
                                                alt={skill.name}
                                                className={styles.skills__icon}
                                            />
                                            <h3 className={styles.skills__label}>{skill.name}</h3>
                                        </div>
                                    </div>

                                    <div className={styles.skills__cardBack}>
                                        <div className={styles.skills__cardContent}>
                                            <h3 className={styles.skills__label}>{skill.name}</h3>
                                            <ul className={styles.skills__description}>
                                                {skill.items.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* MOBILE / TABLET */}
                    <div className={styles.skills__mobile}>
                        <div className={styles.skills__mobileCard}>
                            {grouped[page].map((skill) => (
                                <div key={skill.name} className={styles.skills__mobileRow}>
                                    {/* LEFT ICON + LABEL */}
                                    <div className={styles.skills__mobileIconCol}>
                                        <img
                                            src={useBaseUrl(skill.icon)}
                                            alt={skill.name}
                                            className={styles.skills__mobileIcon}
                                        />
                                        <h3 className={styles.skills__mobileLabel}>{skill.name}</h3>
                                    </div>

                                    {/* RIGHT TEXT */}
                                    <ul className={styles.skills__mobileText}>
                                        {skill.items.slice(0, 3).map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* DOTS */}
                        <div className={styles.skills__pagination}>
                            {Array.from({ length: totalPages }).map((_, i) => (
                                <button
                                    key={i}
                                    className={`${styles.skills__dot} ${i === page ? styles.skills__dotActive : ""
                                        }`}
                                    onClick={() => setPage(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
