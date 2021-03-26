import React from "react";
import "./index.scss";
import { Navigator } from "../../components/navigator";
import { ProjectList } from "../../components/projects";

export default function ProjectPage() {
  return (
    <div id="project-page" className="page">
      <div className="header">
        <h2 className="title">Pandajiny blog.</h2>
        <h3 className="page-title">My projects</h3>
      </div>
      <div className="sidebar">
        <Navigator />
      </div>
      <div className="content">
        <ProjectList />
      </div>
    </div>
  );
}
