import React from "react";
import "./projects-component.scss";

const projects: ProjectItemProps[] = [
  {
    title: "Scheduler",
    description:
      "Scheduler web application supporting mobile environment by PWA.",
    id: "scheduler",
    link: "https://scheduler.pandajiny.com",
  },
  {
    title: "Foodgram",
    description:
      "Map application for note my places. Remember and write a review.",
    id: "scheduler",
    link: "https://scheduler.pandajiny.com",
  },
  {
    title: "Authentication",
    description:
      "Authentication service using Express.js framework. It manage client session with Redis DB and another service can be shared client auth information.",
    id: "authentication",
  },
];

export function ProjectList() {
  return (
    <div className="project-list">
      {projects.map((item) => (
        <ProjectItem {...item}></ProjectItem>
      ))}
    </div>
  );
}

export interface ProjectItemProps {
  title: string;
  description: string;
  id: string;
  link?: string;
}

function ProjectItem({ title, description, id, link }: ProjectItemProps) {
  function redirect() {
    location.href = `/projects/${id}`;
  }
  return (
    <div className="project-item" onClick={redirect}>
      <h3>{title}</h3>
      <a href={link}>{link}</a>
      <p>{description}</p>
    </div>
  );
}

export function Hello() {
  return <div>hi</div>;
}
