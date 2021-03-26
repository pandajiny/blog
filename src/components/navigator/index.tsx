import React from "react";
import { Icon } from "../icons";
import ICON_GITHUB from "../../images/icons/icon_github.png";
import ICON_INSTAGRAM from "../../images/icons/icon_instagram.png";
import ICON_FACEBOOK from "../../images/icons/icon_facebook.png";
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

function goGithub() {
  location.href = "https://github.com/pandajiny";
}

function goInstagram() {
  location.href = "https://www.instagram.com/pandajiny";
}

function goFacebook() {
  location.href = "https://www.facebook.com/profile.php?id=100009892637795";
}

export function Navigator() {
  return (
    <div className="navigator">
      <div className="sns-icons">
        <Icon size={28} src={ICON_GITHUB} onClick={goGithub} />
        <Icon size={28} src={ICON_INSTAGRAM} onClick={goInstagram} />
        <Icon size={28} src={ICON_FACEBOOK} onClick={goFacebook} />
      </div>
      {navs.map((item) => (
        <NavItem key={Math.random()} {...item}></NavItem>
      ))}
    </div>
  );
}

const isActive = (href: string): boolean => {
  if (typeof window == "undefined") {
    console.log(`there's no window object`);
    return false;
  }
  return (
    window.location.pathname.replace("/", "").replace("/", "") ==
    href.replace("/", "")
  );
};

function NavItem({ title, href }: NavItemProps) {
  return (
    <div className="nav-item">
      <a className={isActive(href) ? "active" : ""} href={href}>
        {title}
      </a>
    </div>
  );
}
