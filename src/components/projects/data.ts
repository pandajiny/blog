import { Stack } from "../icons/stack-icons";

export interface Post {
  title: string;
  link: string;
}
export interface ProjectPost {
  descriptions: string[];
  posts: Post[];
}
export interface Project {
  title: string;
  description: string;
  stacks: Stack[];
  link?: string;
  linkIntroduce?: string;
  post: ProjectPost;
}

export const SchedulerProject: Project = {
  title: "Scheduler",
  linkIntroduce: "https://pandajiny.tistory.com/category/Projects/Scheduler",
  description: "모바일과 데스크탑 환경을 지원하는 캘린더 어플리케이션입니다.",
  stacks: [
    "html",
    "scss",
    "pwa",
    "typescript",
    "docker",
    "node",
    "nest",
    "mysql",
  ],
  link: "https://scheduler.pandajiny.com",
  post: {
    descriptions: [
      "PWA 태그를 통해 모바일 환경과 데스크탑 환경을 모두 지원하는 캘린더 어플리케이션입니다. 아직 부족하지만 꾸준히 개선하며 직접 사용중이고, 웹 어플리케이션의 특성상 여러 플랫폼을 동시에 개발하는 것이 용이합니다.",
      "React 등의 front-end Framework 없이 HTML과 TypeScript, SCSS를 통해 클라이언트를 빌드하였습니다. front-end 개발을 진행하며 Web-Element, DOM and History API와 웹 표준에 대한 전반적인 이해를 기를 수 있었습니다.",
    ],
    posts: [
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
      {
        title: "Nest.js : Express.js 와는 또 다른 장점",
        link: "https://pandajiny.tistory.com/14",
      },
      {
        title: "서비스 운영 플랫폼, 기초의 중요성",
        link: "https://pandajiny.tistory.com/15",
      },
    ],
  },
};

export const AuthServiceProject: Project = {
  title: "Auth Service",
  description:
    "각각의 서비스 간 공통으로 사용되는 보안 모듈입니다. 세션을 기반으로 동작합니다.",
  stacks: ["node", "express", "docker", "typescript", "mysql"],
  linkIntroduce:
    "https://pandajiny.tistory.com/category/Projects/Auth%20Service",
  post: {
    descriptions: [
      "개발한 어플리케이션 간 공용으로 사용하는 보안 모듈입니다. express.js 와 Redis Database를 사용한 세션 기반의 서비스로, .pandajiny.com 도메인을 공유하는 서비스 간 통용됩니다.",
    ],
    posts: [
      {
        title: "프로젝트 개요",
        link: "https://pandajiny.tistory.com/6",
      },
      {
        title: "세션 기반 보안 서비스 구축하기",
        link: "https://pandajiny.tistory.com/11",
      },
    ],
  },
};

export const FoodgramProject: Project = {
  title: "Foodgram",
  description: "네이버 지도 API 를 사용하여 만든 맛집 지도 어플리케이션입니다.",
  stacks: ["react", "nest", "docker", "node", "typescript", "mysql", "express"],
  link: "https://food.pandajiny.com",
  linkIntroduce: "https://pandajiny.tistory.com/category/Projects/Foodgram",
  post: {
    descriptions: [
      "지도 API를 바탕으로 개발된 평소에 관심있었던 식당을 저장 및 리뷰하는 서비스 입니다.",
    ],
    posts: [
      {
        title: "프로젝트 개요",
        link: "https://pandajiny.tistory.com/9",
      },
    ],
  },
};

export const BlogProject: Project = {
  title: "Blog",
  description:
    "정적 React 페이지를 생성해주는 Gatsby Framework 를 사용하여 만든 블로그입니다.",
  stacks: ["react", "gatsby", "typescript", "scss"],
  link: "https://blog.pandajiny.com",
  linkIntroduce: "https://pandajiny.tistory.com/category/Projects/Blog",
  post: {
    descriptions: [
      "Gatsby 를 사용하여 제작된 블로그. 정적 웹 페이지로 작성되어 간단하고 빠르다.",
    ],
    posts: [
      {
        title: "프로젝트 개요",
        link: "https://pandajiny.tistory.com/13",
      },
    ],
  },
};
