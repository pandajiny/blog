import { PageComponent } from "@components/page";
import { Post, ProjectPost } from "@components/projects";
import React from "react";

const description = [
  "개발한 어플리케이션 간 공용으로 사용하는 보안 모듈입니다. express.js 와 Redis Database를 사용한 세션 기반의 서비스로, .pandajiny.com 도메인을 공유하는 서비스 간 통용됩니다.",
];
const posts: Post[] = [
  {
    title: "프로젝트 개요",
    link: "https://pandajiny.tistory.com/6",
  },
  {
    title: "세션 기반 보안 서비스 구축하기",
    link: "https://pandajiny.tistory.com/11",
  },
];

export default function () {
  return (
    <PageComponent pageName="auth-service" title="Project auth service">
      <ProjectPost description={description} posts={posts} />
    </PageComponent>
  );
}
