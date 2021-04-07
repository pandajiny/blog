import React from "react";
import {
  AuthServiceProject,
  BlogProject,
  FoodgramProject,
  Post,
  Project,
  SchedulerProject,
} from "./data";
import { Stack, StackIcons } from "../icons/stack-icons";
import "./project-list.scss";
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

const projects: Project[] = [
  SchedulerProject,
  AuthServiceProject,
  FoodgramProject,
  BlogProject,
];

export function ProjectList() {
  return (
    <div className="project-list">
      {projects
        // .sort((prev, next) => next.cntPosts - prev.cntPosts)
        .map((project) => (
          <ProjectItem key={Math.random()} project={project}></ProjectItem>
        ))}
    </div>
  );
}

function ProjectItem(props: { project: Project }) {
  const {
    description,
    post,
    stacks,
    title,
    link,
    linkIntroduce,
  } = props.project;
  function goIntroducePage() {
    location.href = `/projects/${title.toLowerCase().replace(" ", "-")}`;
    // if (introducePage) {
    //   location.href = introducePage;
    // }
  }

  const Title = () => (
    <a className="title" onClick={goIntroducePage}>
      {title}
    </a>
  );

  const Link = () => (
    <a className="link" href={link}>
      {link}
    </a>
  );

  return (
    <div className="project-item">
      <StackIcons displayCount={3} stacks={stacks} />
      <Title />
      {link && <Link />}
      <p className="posts">
        {post.posts.length > 0
          ? `${post.posts.length} Related posts`
          : "None related Posts"}
      </p>
      <p className="description">{description}</p>
    </div>
  );
}

interface ProjectPostInterface {
  descriptions: string[];
  posts: Post[];
  stacks: Stack[];
}
export function ProjectPost({
  descriptions,
  posts,
  stacks,
}: ProjectPostInterface) {
  return (
    <div className="project-post">
      <StackIcons stacks={stacks} />
      <h2>프로젝트 설명</h2>
      {descriptions.map((sentence) => (
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
