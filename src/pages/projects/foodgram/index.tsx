import { PageComponent } from "@components/page";
import { Post, ProjectPost } from "@components/projects";
import React from "react";

const description = [
  "지도 API를 바탕으로 개발된 평소에 관심있었던 식당을 저장 및 리뷰하는 서비스 입니다.",
];
const posts: Post[] = [
  {
    title: "프로젝트 개요",
    link: "https://pandajiny.tistory.com/9",
  },
];

export default function () {
  return (
    <PageComponent pageName="project-foodgram" title="Foodgram project">
      <ProjectPost description={description} posts={posts} />
    </PageComponent>
  );
}
