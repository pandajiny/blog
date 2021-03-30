import React from "react";
import "./index.scss";

import { Navigator } from "../../components/navigator";

interface PageProps {
  pageName: string;
  title?: string;
  children?: React.ReactNode;
}

export const PageComponent = (props: PageProps) => {
  const { pageName, title } = props;
  return (
    <div id={`${pageName}-page`} className="page">
      <div className="header">
        <h2 className="title">Pandajiny blog.</h2>
        {title && <h3 className="page-title">{title}</h3>}
      </div>
      <div className="sidebar">
        <Navigator />
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};
