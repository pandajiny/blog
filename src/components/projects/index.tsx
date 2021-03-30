import React from "react";
import { Stack, StackIcons } from "../icons/stack-icons";
import "./index.scss";

export interface ProjectItemProps {
  title: string;
  description: string;
  introducePage?: string;
  stacks?: Stack[];
  link?: string;
}

const projects: ProjectItemProps[] = [
  {
    title: "Blog",
    description:
      "This blog is made with React.js framework. Using gatsby for build static page and deploy to gh-page service",
    stacks: ["react", "gatsby", "typescript", "scss"],
    link: "https://blog.pandajiny.com",
    introducePage: "https://pandajiny.tistory.com/category/Projects/Blog",
  },
  {
    title: "Scheduler",
    introducePage: "https://pandajiny.tistory.com/category/Projects/Scheduler",
    description:
      "Scheduler web application supporting mobile environment by PWA.",
    stacks: ["html", "scss", "pwa", "typescript", "docker", "node"],
    link: "https://scheduler.pandajiny.com",
  },
  {
    title: "Foodgram",
    description:
      "Map application for note my places. Remember and write a review.",
    stacks: ["react", "nest", "docker", "node", "typescript"],
    link: "https://food.pandajiny.com",
    introducePage: "https://pandajiny.tistory.com/category/Projects/Foodgram",
  },
  {
    title: "Auth Service",
    description:
      "Authentication service using Express.js framework. It manage client session with Redis DB and another service can be shared client auth information.",
    stacks: ["node", "express", "docker", "typescript"],
    introducePage:
      "https://pandajiny.tistory.com/category/Projects/Auth%20Service",
  },
];

export function ProjectList() {
  return (
    <div className="project-list">
      {projects.map((item) => (
        <ProjectItem key={Math.random()} {...item}></ProjectItem>
      ))}
    </div>
  );
}

function ProjectItem({ title, description, link, stacks }: ProjectItemProps) {
  function goIntroducePage() {
    const projectName = title.toLowerCase().replace(" ", "-");
    location.pathname = `/projects/${projectName}`;
    // if (introducePage) {
    //   location.href = introducePage;
    // }
  }
  return (
    <div className="project-item">
      <h2 className="title" onClick={goIntroducePage}>
        {title}
      </h2>
      {link && (
        <a className="link" href={link}>
          {link}
        </a>
      )}
      {stacks && <StackIcons stacks={stacks} />}
      <p className="description">&nbsp;&nbsp;{description}</p>
    </div>
  );
}

export function Hello() {
  return <div>hi</div>;
}
