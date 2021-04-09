import React from "react";
import { PageComponent } from "@components/page";
import { ProjectList } from "@components/projects";

export default function () {
  return (
    <PageComponent pageName="projects" title="Projects">
      <ProjectList />
    </PageComponent>
  );
}
