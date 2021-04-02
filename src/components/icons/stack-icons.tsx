import React from "react";
import { Icon } from ".";

import ICON_TS from "@icons/icon_typescript.png";
import ICON_NODE from "@icons/icon_nodejs.png";
import ICON_NEST from "@icons/icon_nestjs.png";
import ICON_EXPRESS from "@icons/icon_express.png";

import ICON_REACT from "@icons/icon_react.png";
import ICON_GATSBY from "@icons/icon_gatsby.png";

import ICON_HTML from "@icons/icon_html.png";
import ICON_SCSS from "@icons/icon_scss.png";
import ICON_PWA from "@icons/icon_pwa.png";

import ICON_MYSQL from "@icons/icon_mysql.png";
import ICON_DOCKER from "@icons/icon_docker.png";

import ICON_MORE from "@icons/icon_more.svg";

const ICONS = {
  typescript: ICON_TS as string,
  react: ICON_REACT as string,
  gatsby: ICON_GATSBY as string,
  docker: ICON_DOCKER as string,
  mysql: ICON_MYSQL as string,
  html: ICON_HTML as string,
  pwa: ICON_PWA as string,
  node: ICON_NODE as string,
  nest: ICON_NEST as string,
  scss: ICON_SCSS as string,
  express: ICON_EXPRESS as string,
};

export type Stack = keyof typeof ICONS;

interface StackIconsProps {
  stacks: Stack[];
  displayCount?: number;
}

export const StackIcons = ({ displayCount = 3, stacks }: StackIconsProps) => {
  return (
    <div className="stack-icons">
      {stacks.slice(0, displayCount).map((stack) => (
        <Icon src={ICONS[stack]} />
      ))}
      {stacks.length > displayCount && <Icon src={ICON_MORE} />}
    </div>
  );
};
