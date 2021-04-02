import React, { useState } from "react";
import "./index.scss";

import { Navigator } from "@components/navigator";

interface PageProps {
  pageName: string;
  title?: string;
  children?: React.ReactNode;
}

export const PageComponent = (props: PageProps) => {
  const { pageName, title } = props;
  const [isDisplayNav, setDisplayNav] = useState(false);

  function enableNav() {
    setDisplayNav(true);
  }
  function disableNav() {
    setDisplayNav(false);
  }
  return (
    <div id={`${pageName}-page`} className="page">
      <div className="header">
        <h2 className="blog-title">Pandajiny blog.</h2>
        {title && <h3 className="page-title">{title}</h3>}
        <button onClick={enableNav} className="extend-button">
          Nav
        </button>
      </div>
      <div className={`sidebar ${isDisplayNav && "active"}`}>
        <button className="close-button" onClick={disableNav}>
          Close
        </button>
        <Navigator />
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};
