import React from "react";
import { Navigator } from "../../components/Navigator";
import { ProjectList } from "../../components/projects";

export default function ProjectPage() {
  return (
    <div id="project-page" className="page">
      <h2 className="title">My Projects</h2>
      <Navigator />
      <ProjectList></ProjectList>
    </div>
  );
}
