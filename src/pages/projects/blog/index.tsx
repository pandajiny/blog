import { PageComponent } from "@components/page";
import { Post, ProjectPost } from "@components/projects";
import React from "react";

const description = [
  "Gatsby 를 사용하여 제작된 블로그. 정적 웹 페이지로 작성되어 간단하고 빠르다.",
];
const posts: Post[] = [
  {
    title: "프로젝트 개요",
    link: "https://pandajiny.tistory.com/13",
  },
];

export default function () {
  return (
    <PageComponent pageName="project-blog" title="Blog project">
      <ProjectPost description={description} posts={posts} />
    </PageComponent>
  );
}
