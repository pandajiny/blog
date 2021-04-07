import { PageComponent } from "@components/page";
import { Post, ProjectPost } from "@components/projects";
import React from "react";

const description = [
  "PWA 태그를 통해 모바일 환경과 데스크탑 환경을 모두 지원하는 캘린더 어플리케이션입니다. 아직 부족하지만 꾸준히 개선하며 직접 사용중이고, 웹 어플리케이션의 특성상 여러 플랫폼을 동시에 개발하는 것이 용이합니다.",
  "React 등의 front-end Framework 없이 HTML과 TypeScript, SCSS를 통해 클라이언트를 빌드하였습니다. front-end 개발을 진행하며 Web-Element, DOM and History API와 웹 표준에 대한 전반적인 이해를 기를 수 있었습니다.",
];

const posts: Post[] = [
  {
    title: "프로젝트 개요 : 웹 개발의 기본기",
    link: "https://pandajiny.tistory.com/7?category=972245",
  },
  {
    title: "Web Component : Framework 없이 구현하는 SPA",
    link: "https://pandajiny.tistory.com/10?category=972245",
  },
  {
    title: "Custom Router 작성 : Framework 없이 구현하는 SPA2",
    link: "https://pandajiny.tistory.com/12",
  },
];

export default function () {
  return (
    <PageComponent pageName="project-blog" title="Project scheduler">
      <ProjectPost posts={posts} description={description} />
    </PageComponent>
  );
}
