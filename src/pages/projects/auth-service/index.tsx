import { PageComponent } from "@components/page";
import { ProjectPost } from "@components/projects";
import { AuthServiceProject } from "@components/projects/data";
import React from "react";

const project = AuthServiceProject;
export default function () {
  const { descriptions, posts } = project.post;
  return (
    <PageComponent pageName="auth-service" title="Project auth service">
      <ProjectPost descriptions={descriptions} posts={posts} />
    </PageComponent>
  );
}
