import React from "react";
import { Navigator, NavItemProps } from "../components/navigator";

export default function Home() {
  return (
    <div className="page">
      <div className="header">
        <h2 className="title">Pandajiny blog.</h2>
        <h3 className="page-title">Welcome!</h3>
      </div>
      <div className="sidebar">
        <Navigator />
      </div>
      <div className="content">
        <h3>Welcome to pandajiny's blog</h3>
      </div>
    </div>
  );
}
