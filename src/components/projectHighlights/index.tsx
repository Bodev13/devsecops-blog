import React, { useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./projectHighlights.module.css";
import Link from "@docusaurus/Link";

type Skill =
    | "YAML"
    | "Shell scripting"
    | "IT Security"
    | "Container"
    | "Python"
    | "CI/CD";

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    skills: Skill[];
    documentationUrl: string;
    githubUrl: string;
};

const skillConfig: Record<Skill, string> = {
    YAML: "/img/portfolio/icons/propYaml.png",
    "Shell scripting": "/img/portfolio/icons/propShell.png",
    "IT Security": "/img/portfolio/icons/propITSec.png",
    Container: "/img/portfolio/icons/propContainer.png",
    Python: "/img/portfolio/icons/python.png",
    "CI/CD": "/img/portfolio/icons/cicd.png",
};

const projects: Project[] = [
    {
        id: 1,
        title: "Conduit",
        description:
            "This project demonstrates a containerized fullstack web application with a Python backend and an Angular frontend, orchestrated using Docker Compose.",
        image: "/img/portfolio/icons/conduit_fullstack.png",
        skills: ["Container", "Python", "CI/CD"],
        documentationUrl: "docs/projects/conduit-container-deployment",
        githubUrl: "https://github.com/Bodev13/conduit-fullstack-app",
    },
    {
        id: 2,
        title: "Truck Signs API",
        description:
            "This project demonstrates deploying a Django REST API together with a PostgreSQL database using Docker.",
        image: "/img/portfolio/icons/trucks.png",
        skills: ["Container", "Python"],
        documentationUrl: "docs/projects/truck-signs-api",
        githubUrl: "https://github.com/Bodev13/truck_signs_api",
    },
    {
        id: 3,
        title: "Juice Shop Meister",
        description:
            "This project documents selected OWASP Juice Shop challenges performed in a local test environment.",
        image: "/img/portfolio/icons/juiceShop.png",
        skills: ["IT Security"],
        documentationUrl: "docs/projects/juice-shop-master",
        githubUrl: "https://github.com/Bodev13/devsecops-blog/tree/juice-shop-master",
    },
    {
        id: 4,
        title: "Minecraft",
        description:
            "This project demonstrates deploying a Minecraft Java Edition server using Docker and Docker Compose.",
        image: "/img/portfolio/icons/minecraft.png",
        skills: ["YAML", "Shell scripting", "Container"],
        documentationUrl: "docs/projects/minecraft-server",
        githubUrl: "https://github.com/Bodev13/Minecraft",
    },
    {
        id: 5,
        title: "WordPress hosten",
        description:
            "This project demonstrates deploying a WordPress website with a MariaDB database using Docker and Docker Compose.",
        image: "/img/portfolio/icons/wordpress.png",
        skills: ["Container", "Shell scripting"],
        documentationUrl: "docs/projects/wordpress",
        githubUrl: "https://github.com/Bodev13/wordpress",
    },
];

export default function ProjectHighlights() {
    const [activeProjectId, setActiveProjectId] = useState<number>(projects[0].id);

    const activeProject =
        projects.find((project) => project.id === activeProjectId) ?? projects[0];

    return (
        <section id="projects" className={styles.section}>
            <div className="contentLayout">
                <div className={styles.container}>
                    <h2 className={styles.title}>My project highlights</h2>

                    <div className={styles.content}>
                        <nav className={styles.nav}>
                            {projects.map((project) => (
                                <button
                                    key={project.id}
                                    type="button"
                                    className={`${styles.navItem} ${project.id === activeProject.id ? styles.active : ""
                                        }`}
                                    onClick={() => setActiveProjectId(project.id)}
                                >
                                    {project.id}. {project.title}
                                </button>
                            ))}

                            <Link to="/docs/projects/conduit-container-deployment" className={styles.more}>
                                → see more projects
                            </Link>



                        </nav>

                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h3>{activeProject.title}</h3>

                                <div className={styles.tags}>
                                    {activeProject.skills.map((skill) => (
                                        <span key={skill} className={styles.skillTag}>
                                            <img
                                                src={useBaseUrl(skillConfig[skill])}
                                                alt={skill}
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

                                <div className={styles.description}>
                                    <p>{activeProject.description}</p>

                                    <div className={styles.actions}>
                                        <a
                                            href={activeProject.documentationUrl}
                                            className={styles.primary}
                                        >
                                            Documentation
                                        </a>
                                        <a
                                            href={activeProject.githubUrl}
                                            className={styles.secondary}
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
