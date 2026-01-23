import React, { useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import styles from "./projectHighlights.module.css";

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

type ResolvedSkill = {
    name: Skill;
    icon: string;
};

type ResolvedProject = Omit<Project, "skills" | "image"> & {
    image: string;
    skills: ResolvedSkill[];
};

const skillConfig: Record<Skill, string> = {
    YAML: "/img/portfolio/icons/proYaml.png",
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
        documentationUrl: "/docs/projects/conduit-container-deployment",
        githubUrl: "https://github.com/Bodev13/conduit-fullstack-app",
    },
    {
        id: 2,
        title: "Truck Signs API",
        description:
            "This project demonstrates deploying a Django REST API together with a PostgreSQL database using Docker.",
        image: "/img/portfolio/icons/truckSigns.png",
        skills: ["Container", "Python"],
        documentationUrl: "/docs/projects/truck-signs-api",
        githubUrl: "https://github.com/Bodev13/truck_signs_api",
    },
    {
        id: 3,
        title: "Juice Shop Meister",
        description:
            "This project documents selected OWASP Juice Shop challenges performed in a local test environment.",
        image: "/img/portfolio/icons/juiceShop.png",
        skills: ["IT Security"],
        documentationUrl: "/docs/projects/juice-shop-master",
        githubUrl:
            "https://github.com/Bodev13/devsecops-blog/tree/juice-shop-master",
    },
    {
        id: 4,
        title: "Minecraft",
        description:
            "This project demonstrates deploying a Minecraft Java Edition server using Docker and Docker Compose.",
        image: "/img/portfolio/icons/minecraft.png",
        skills: ["YAML", "Shell scripting", "Container"],
        documentationUrl: "/docs/projects/minecraft-server",
        githubUrl: "https://github.com/Bodev13/Minecraft",
    },
];

export default function ProjectHighlights() {
    const resolve = (path: string) => useBaseUrl(path);

    const resolvedProjects: ResolvedProject[] = projects.map((project) => ({
        ...project,
        image: resolve(project.image),
        skills: project.skills.map((skill) => ({
            name: skill,
            icon: resolve(skillConfig[skill]),
        })),
    }));

    const [activeProjectId, setActiveProjectId] = useState<number>(
        resolvedProjects[0].id
    );

    const activeProject =
        resolvedProjects.find((p) => p.id === activeProjectId) ??
        resolvedProjects[0];

    return (
        <section id="projects" className={styles.section}>
            <div className="contentContainer">
                <div className={styles.container}>
                    <h2 className={styles.title}>My project highlights</h2>

                    <div className={styles.content}>
                        <nav className={styles.nav}>
                            {resolvedProjects.map((project) => (
                                <button
                                    key={project.id}
                                    type="button"
                                    className={`${styles.navItem} ${project.id === activeProjectId ? styles.active : ""
                                        }`}
                                    onClick={() => setActiveProjectId(project.id)}
                                >
                                    {project.id}. {project.title}
                                </button>
                            ))}

                            <Link to="/docs/projects/overview" className={styles.more}>
                                → see more projects
                            </Link>
                        </nav>

                        <div className={styles.card}>
                            <div className={styles.cardLeft}>
                                <h3 className={styles.cardTitle}>
                                    {activeProject.title}
                                </h3>

                                <div className={styles.imageBlock}>
                                    <img
                                        src={activeProject.image}
                                        alt={activeProject.title}
                                        className={styles.projectImage}
                                    />
                                </div>
                            </div>

                            <div className={styles.cardRight}>
                                <div className={styles.tags}>
                                    {activeProject.skills.map((skill) => (
                                        <span key={skill.name} className={styles.skillTag}>
                                            <img
                                                src={skill.icon}
                                                className={styles.skillIcon}
                                                alt={skill.name}
                                            />
                                            <span className={styles.skillText}>
                                                {skill.name}
                                            </span>
                                        </span>
                                    ))}
                                </div>

                                <div className={styles.description}>
                                    <p>{activeProject.description}</p>
                                </div>

                                <div className={styles.actions}>
                                    <Link
                                        to={activeProject.documentationUrl}
                                        className={styles.primary}
                                    >
                                        Documentation
                                    </Link>

                                    <a
                                        href={activeProject.githubUrl}
                                        className={styles.secondary}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.projectsMobile}>
                        {resolvedProjects.map((project) => (
                            <div key={project.id} className={styles.card}>
                                <div className={styles.cardLeft}>
                                    <h3 className={styles.cardTitle}>
                                        {project.id}. {project.title}
                                    </h3>

                                    <div className={styles.tags}>
                                        {project.skills.map((skill) => (
                                            <span key={skill.name} className={styles.skillTag}>
                                                <img
                                                    src={resolve(skillConfig[skill.name])}
                                                    className={styles.skillIcon}
                                                    alt={skill.name}
                                                />
                                                <span className={styles.skillText}>
                                                    {skill.name}
                                                </span>
                                            </span>
                                        ))}
                                    </div>

                                    <div className={styles.imageBlock}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className={styles.projectImage}
                                        />
                                    </div>

                                    <div className={styles.description}>
                                        <p>{project.description}</p>
                                    </div>

                                    <div className={styles.actions}>
                                        <Link
                                            to={project.documentationUrl}
                                            className={styles.primary}
                                        >
                                            Documentation
                                        </Link>

                                        <a
                                            href={project.githubUrl}
                                            className={styles.secondary}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <Link to="/docs/projects/overview" className={styles.more}>
                            → see more projects
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
