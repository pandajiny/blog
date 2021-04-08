import React from "react";
import "./index.scss";

import ICON_MAIL from "@icons/icon_mail.svg";
import ICON_PHONE from "@icons/icon_phone.svg";
import ICON_WEB from "@icons/icon_web.svg";

import ICON_GITHUB from "../../images/icons/icon_github.png";
import ICON_INSTAGRAM from "../../images/icons/icon_instagram.png";
import ICON_FACEBOOK from "../../images/icons/icon_facebook.png";

interface IconProps {
  src: string;
  className?: string;
  isRound?: boolean;
  size?: number;
  onClick?: () => void;
}
export const Icon = ({
  src,
  className,
  isRound = true,
  size,
  onClick,
}: IconProps) => {
  return (
    <div
      className={`icon ${className} ${isRound && "round"}`}
      onClick={onClick}
      style={onClick ? { cursor: "pointer" } : undefined}
    >
      <img
        src={src}
        style={size ? { width: size, height: size } : undefined}
      ></img>
    </div>
  );
};

export const IconWeb = () => <Icon size={18} src={ICON_WEB} isRound={false} />;

export const IconMail = () => (
  <Icon size={18} src={ICON_MAIL} isRound={false} />
);
export const IconPhone = () => (
  <Icon size={18} src={ICON_PHONE} isRound={false} />
);

// SNS ICONS
function goGithub() {
  location.href = "https://github.com/pandajiny";
}
export const IconGithub = () => (
  <Icon size={28} src={ICON_GITHUB} onClick={goGithub} />
);

function goInstagram() {
  location.href = "https://www.instagram.com/pandajiny";
}
export const IconInstagram = () => (
  <Icon size={28} src={ICON_INSTAGRAM} onClick={goInstagram} />
);

function goFacebook() {
  location.href = "https://www.facebook.com/profile.php?id=100009892637795";
}
export const IconFacebook = () => (
  <Icon size={28} src={ICON_FACEBOOK} onClick={goFacebook} />
);
