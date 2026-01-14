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
    overlay: string;
    skills: Skill[];
    documentationUrl: string;
    githubUrl: string;
};

const skillConfig: Record<
    Skill,
    { icon: string; width: number; height: number; shell?: boolean }
> = {
    YAML: {
        icon: "/img/portfolio/icons/yaml.png",
        width: 34,
        height: 32,
    },
    "Shell scripting": {
        icon: "/img/portfolio/icons/shell_scripting.png",
        width: 32,
        height: 32,
        shell: true,
    },
    "IT Security": {
        icon: "/img/portfolio/icons/security.png",
        width: 32,
        height: 32,
    },
    Container: {
        icon: "/img/portfolio/icons/docker.png",
        width: 41,
        height: 32,
    },
};

const projects: Project[] = [
    {
        id: 1,
        title: "Baby Tools",
        description: "",
        image: "",
        overlay: "",
        skills: [],
        documentationUrl: "#",
        githubUrl: "#",
    },
    {
        id: 2,
        title: "Truck Signs API",
        description: "",
        image: "",
        overlay: "",
        skills: [],
        documentationUrl: "#",
        githubUrl: "#",
    },
    {
        id: 3,
        title: "Juice Shop Meister",
        description: "",
        image: "",
        overlay: "",
        skills: [],
        documentationUrl: "#",
        githubUrl: "#",
    },
    {
        id: 4,
        title: "Minecraft",
        description:
            "Write some information about the project. For example: Why are you proud of it? What were you able to implement here? What different algorithms, server architecture did you use? Why did you find this project so interesting?",
        image: "/img/portfolio/icons/minecraft.png",
        overlay: "/img/portfolio/icons/title_minecraft.png",
        skills: ["YAML", "Shell scripting", "IT Security", "Container"],
        documentationUrl: "#",
        githubUrl: "#",
    },
    {
        id: 5,
        title: "WordPress hosten",
        description: "",
        image: "",
        overlay: "",
        skills: [],
        documentationUrl: "#",
        githubUrl: "#",
    },
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
                            <h3>Project {activeProject.title}</h3>

                            <div className={styles.tags}>
                                {activeProject.skills.map((skill) => {
                                    const cfg = skillConfig[skill];
                                    return (
                                        <span key={skill} className={styles.tag}>
                                            <img
                                                src={useBaseUrl(cfg.icon)}
                                                alt={skill}
                                                className={styles.tagIcon}
                                                style={{
                                                    width: cfg.width,
                                                    height: cfg.height,
                                                    filter: cfg.shell
                                                        ? "brightness(0) saturate(100%) invert(24%) sepia(3%) saturate(1200%) hue-rotate(170deg) brightness(95%) contrast(90%)"
                                                        : "none",
                                                }}
                                            />
                                            {skill}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>

                        <div className={styles.cardBody}>
                            <div className={styles.imageBlock}>
                                <div className={styles.imageWrapper}>
                                    <img
                                        src={useBaseUrl(activeProject.image)}
                                        alt=""
                                        className={styles.baseImage}
                                    />
                                    <img
                                        src={useBaseUrl(activeProject.overlay)}
                                        alt=""
                                        className={styles.overlayImage}
                                    />
                                </div>
                            </div>

                            <p className={styles.description}>
                                {activeProject.description}
                            </p>
                        </div>

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
        </section>
    );
}
