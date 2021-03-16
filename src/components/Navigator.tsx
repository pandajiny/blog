import React from "react";
import { useLocation } from "react-router";
import "./navigator.scss";

export interface NavigatorProps {
  items: NavItemProps[];
}

export interface NavItemProps {
  title: string;
  href: string;
}

const navs: NavItemProps[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
];

export function Navigator() {
  return (
    <div className="navigator">
      {navs.map((item) => (
        <NavItem {...item}></NavItem>
      ))}
    </div>
  );
}

function NavItem({ title, href }: NavItemProps) {
  const isActive =
    typeof window !== "undefined" && window.location.pathname == href;

  return (
    <div className="nav-item">
      <a className={isActive ? "active" : ""} href={href}>
        {title}
      </a>
    </div>
  );
}
