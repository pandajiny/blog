import React from "react";
import { Stack, StackIcons } from "../icons/stack-icons";
import "./projects-component.scss";

const projects: ProjectItemProps[] = [
  {
    title: "Blog",
    description:
      "This blog is made with React.js framework. Using gatsby for build static page and deploy to gh-page service",
    id: "scheduler",
    stacks: ["react", "typescript", "gatsby"],
    link: "https://blog.pandajiny.com",
  },
  {
    title: "Scheduler",
    description:
      "Scheduler web application supporting mobile environment by PWA.",
    id: "scheduler",
    stacks: ["html", "pwa", "typescript", "docker", "node"],
    link: "https://scheduler.pandajiny.com",
  },
  {
    title: "Foodgram",
    description:
      "Map application for note my places. Remember and write a review.",
    id: "scheduler",
    stacks: ["nest", "react", "docker", "node", "typescript"],
    link: "https://food.pandajiny.com",
  },
  {
    title: "Authentication",
    description:
      "Authentication service using Express.js framework. It manage client session with Redis DB and another service can be shared client auth information.",
    stacks: ["docker", "node", "typescript"],
    id: "authentication",
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

export interface ProjectItemProps {
  title: string;
  description: string;
  id: string;
  stacks?: Stack[];
  link?: string;
}

function ProjectItem({
  title,
  description,
  id,
  link,
  stacks,
}: ProjectItemProps) {
  function redirect() {
    location.href = `/projects/${id}`;
  }
  return (
    <div className="project-item" onClick={redirect}>
      <h3>{title}</h3>
      {link && <a href={link}>{link}</a>}
      {stacks && <StackIcons stacks={stacks} />}
      <p>{description}</p>
    </div>
  );
}

export function Hello() {
  return <div>hi</div>;
}
