import React, { useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./projectHighlights.module.css";

type Skill =
    | "YAML"
    | "Shell scripting"
    | "IT Security"
    | "Container";

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    skills: Skill[];
    documentationUrl: string;
    githubUrl: string;
};

const skillConfig: Record<Skill, { icon: string }> = {
    YAML: {
        icon: "/img/portfolio/icons/propYaml.png",
    },
    "Shell scripting": {
        icon: "/img/portfolio/icons/propShell.png",
    },
    "IT Security": {
        icon: "/img/portfolio/icons/propITSec.png",
    },
    Container: {
        icon: "/img/portfolio/icons/propContainer.png",
    },
};

const projects: Project[] = [
    { id: 1, title: "Baby Tools", description: "", image: "", skills: [], documentationUrl: "#", githubUrl: "#" },
    { id: 2, title: "Truck Signs API", description: "", image: "", skills: [], documentationUrl: "#", githubUrl: "#" },
    { id: 3, title: "Juice Shop Meister", description: "", image: "", skills: [], documentationUrl: "#", githubUrl: "#" },
    {
        id: 4,
        title: "Minecraft",
        description:
            "This project demonstrates deploying a Minecraft Java Edition server using Docker and Docker Compose, focusing on containerized services, configuration via environment variables, and persistent data storage.",
        image: "/img/portfolio/icons/minecraft.png",
        skills: ["YAML", "Shell scripting", "IT Security", "Container"],
        documentationUrl: "#",
        githubUrl: "#",
    },
    { id: 5, title: "WordPress hosten", description: "", image: "", skills: [], documentationUrl: "#", githubUrl: "#" },
];

export default function ProjectHighlights(): JSX.Element {
    const [activeProject, setActiveProject] = useState<Project>(projects[3]);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>My project highlights</h2>

                <div className={styles.content}>
                    <nav className={styles.nav}>
                        {projects.map((project) => (
                            <button
                                key={project.id}
                                className={`${styles.navItem} ${activeProject.id === project.id ? styles.active : ""
                                    }`}
                                onClick={() => setActiveProject(project)}
                            >
                                {project.id}. {project.title}
                            </button>
                        ))}
                        <a className={styles.more} href="#">
                            → see more projects
                        </a>
                    </nav>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardTitle}>Project Minecraft</h3>

                            <div className={styles.tags}>
                                {activeProject.skills.map((skill) => (
                                    <span key={skill} className={styles.skillTag}>
                                        <img
                                            src={useBaseUrl(skillConfig[skill].icon)}
                                            alt=""
                                            className={styles.skillIcon}
                                        />
                                        <span
                                            className={`${styles.skillText} ${skill === "Shell scripting"
                                                    ? styles.wrap
                                                    : styles.noWrap
                                                }`}
                                        >
                                            {skill}
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className={styles.cardBody}>
                            <div className={styles.imageBlock}>
                                <img
                                    src={useBaseUrl(activeProject.image)}
                                    alt={activeProject.title}
                                    className={styles.projectImage}
                                />
                            </div>

                            <p className={styles.description}>
                                {activeProject.description}
                            </p>
                        </div>

                        <div className={styles.actions}>
                            <a href={activeProject.documentationUrl} className={styles.primary}>
                                Documentation
                            </a>
                            <a href={activeProject.githubUrl} className={styles.secondary}>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
