import { PageComponent } from "@components/page";
import { ProjectPost } from "@components/projects";
import { FoodgramProject } from "@components/projects/data";
import React from "react";

const project = FoodgramProject;
export default function () {
  const { stacks } = project;
  const { descriptions, posts } = project.post;
  return (
    <PageComponent pageName="project-foodgram" title="Foodgram project">
      <ProjectPost descriptions={descriptions} posts={posts} stacks={stacks} />
    </PageComponent>
  );
}
