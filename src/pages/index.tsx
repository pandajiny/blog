import React from "react";
import { Navigator, NavItemProps } from "../components/Navigator";

export default function Home() {
  return (
    <div className="page">
      <h2 className="title">Pandajiny blog</h2>
      <Navigator />
      <div className="contents">
        <h3>Welcome to pandajiny's blog</h3>
      </div>
    </div>
  );
}
