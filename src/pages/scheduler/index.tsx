import { PageComponent } from "@components/page";
import { ProjectPost } from "@components/projects";
import { SchedulerProject } from "@components/projects/data";
import React from "react";

const project = SchedulerProject;
export default function () {
  const { stacks } = project;
  const { descriptions, posts } = project.post;
  return (
    <PageComponent pageName="project-blog" title="Project scheduler">
      <ProjectPost posts={posts} descriptions={descriptions} stacks={stacks} />
    </PageComponent>
  );
}
