import React from "react";
import { useHistory, useLocation } from "react-router";
import "./index.scss";

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
        <NavItem key={Math.random()} {...item}></NavItem>
      ))}
    </div>
  );
}

function NavItem({ title, href }: NavItemProps) {
  const isActive = (href: string): boolean => {
    if (typeof window == "undefined") {
      console.log(`there's no window object`);
      return false;
    }
    return (
      location.pathname.replace("/", "").replace("/", "") ==
      href.replace("/", "")
    );
  };
  return (
    <div className="nav-item">
      <a className={isActive(href) ? "active" : ""} href={href}>
        {title}
      </a>
    </div>
  );
}
