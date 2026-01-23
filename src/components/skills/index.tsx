import React from "react";
import styles from "./skills.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type Skill = {
    name: string;
    icon: string;
    items: string[];
};

const skills: Skill[] = [
    {
        name: "HTML",
        icon: "/img/portfolio/icons/html.png",
        items: [
            "User-friendly navigation menus",
            "Responsive web design",
            "Contact forms and login pages",
            "Transitions, animations and hover effect",
        ],
    },
    {
        name: "CSS",
        icon: "/img/portfolio/icons/css.png",
        items: [
            "User-friendly navigation menus",
            "Responsive web design",
            "Contact forms and login pages",
            "Transitions, animations and hover effect",
        ],
    },
    {
        name: "Static site",
        icon: "/img/portfolio/icons/docusaurus.png",
        items: [
            "search functionality",
            "static website and customization",
            "tags, categories, and RSS feeds",
            "translation",
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

const groupedSkills = chunk(skills, 3);

const Skills: React.FC = () => {
    return (
        <section id="skills" className={styles.skills}>
            <div className="contentContainer">
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

                    <div className={styles.skills__mobile}>
                        <Swiper
                            modules={[Pagination]}
                            slidesPerView={1}
                            spaceBetween={24}
                            pagination={{
                                el: `.${styles.skills__pagination}`,
                                clickable: true,
                            }}
                        >
                            {groupedSkills.map((group, index) => (
                                <SwiperSlide key={index}>
                                    <div className={styles.skills__mobileCard}>
                                        {group.map((skill) => (
                                            <div
                                                key={skill.name}
                                                className={styles.skills__mobileItem}
                                            >
                                                <div
                                                    className={styles.skills__mobileIconBlock}
                                                >
                                                    <img
                                                        src={useBaseUrl(skill.icon)}
                                                        alt={skill.name}
                                                        className={styles.skills__icon}
                                                    />
                                                    <h3 className={styles.skills__label}>
                                                        {skill.name}
                                                    </h3>
                                                </div>

                                                <ul className={styles.skills__description}>
                                                    {skill.items.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className={styles.skills__pagination}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
