import React from "react";
import { Stack, StackIcons } from "../icons/stack-icons";
import "./project-item.scss";
import "./project-post.scss";

export interface ProjectItemProps {
  title: string;
  description: string;
  cntPosts: number;
  introducePage?: string;
  stacks?: Stack[];
  link?: string;
}

const projects: ProjectItemProps[] = [
  {
    title: "Blog",
    description:
      "정적 React 페이지를 생성해주는 Gatsby Framework 를 사용하여 만든 블로그입니다.",
    stacks: ["react", "gatsby", "typescript", "scss"],
    cntPosts: 0,
    link: "https://blog.pandajiny.com",
    introducePage: "https://pandajiny.tistory.com/category/Projects/Blog",
  },
  {
    title: "Scheduler",
    introducePage: "https://pandajiny.tistory.com/category/Projects/Scheduler",
    description: "모바일과 데스크탑 환경을 지원하는 캘린더 어플리케이션입니다.",
    stacks: ["html", "scss", "pwa", "typescript", "docker", "node"],
    cntPosts: 2,
    link: "https://scheduler.pandajiny.com",
  },
  {
    title: "Foodgram",
    description:
      "네이버 지도 API 를 사용하여 만든 맛집 지도 어플리케이션입니다.",
    stacks: ["react", "nest", "docker", "node", "typescript"],
    link: "https://food.pandajiny.com",
    cntPosts: 0,
    introducePage: "https://pandajiny.tistory.com/category/Projects/Foodgram",
  },
  {
    title: "Auth Service",
    description:
      "각각의 서비스 간 공통으로 사용되는 보안 모듈입니다. 세션을 기반으로 동작합니다.",
    stacks: ["node", "express", "docker", "typescript"],
    cntPosts: 2,
    introducePage:
      "https://pandajiny.tistory.com/category/Projects/Auth%20Service",
  },
];

export function ProjectList() {
  return (
    <div className="project-list">
      {projects.map((item) => (
        <ProjectItem key={Math.random()} {...item}></ProjectItem>
      ))}
    </div>
  );
}

function ProjectItem({
  title,
  description,
  link,
  stacks,
  introducePage,
  cntPosts,
}: ProjectItemProps) {
  function goIntroducePage() {
    location.href = `/projects/${title.toLowerCase()}`;
    // if (introducePage) {
    //   location.href = introducePage;
    // }
  }
  return (
    <div className="project-item">
      {stacks && <StackIcons stacks={stacks} />}
      {link && (
        <a className="link" href={link}>
          {link}
        </a>
      )}
      <a className="title" onClick={goIntroducePage}>
        {title}
      </a>
      <p className="posts">
        {cntPosts > 0 ? `${cntPosts} Related posts` : "None related Posts"}
      </p>

      <p className="description">{description}</p>
    </div>
  );
}

interface ProjectPostProps {
  description: string[];
  posts: Post[];
}

export interface Post {
  title: string;
  link: string;
}

export function ProjectPost({ description, posts }: ProjectPostProps) {
  return (
    <div className="project-post">
      <h2>프로젝트 설명</h2>
      {description.map((sentence) => (
        <p className="description">&nbsp;&nbsp;{sentence}</p>
      ))}
      {posts.map((post, index) => (
        <a className="post" href={post.link}>
          {`#${index} ` + post.title}
        </a>
      ))}
    </div>
  );
}
