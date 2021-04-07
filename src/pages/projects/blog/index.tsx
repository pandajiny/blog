import { PageComponent } from "@components/page";
import { ProjectPost } from "@components/projects";
import { BlogProject } from "@components/projects/data";
import React from "react";

const project = BlogProject;
export default function () {
  const { descriptions, posts } = project.post;
  return (
    <PageComponent pageName="project-blog" title="Blog project">
      <ProjectPost descriptions={descriptions} posts={posts} />
    </PageComponent>
  );
}
