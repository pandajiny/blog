import React from "react";
import "./index.scss";
import IMAGE_PROFILE from "@images/image_profile.jpg";
import { IconGithub, IconInstagram, IconMail, IconPhone } from "../icons";

interface InformationProps {
  type: "mail" | "phone";
  content: string;
}

const Information = ({ type, content }: InformationProps) => {
  const Icon = () => {
    switch (type) {
      case "mail":
        return IconMail();
      case "phone":
        return IconPhone();
    }
  };

  return (
    <div className="information">
      <Icon />
      <label>{content}</label>
    </div>
  );
};

export const Profile = () => {
  return (
    <div className="profile">
      <img className="profile-image" src={IMAGE_PROFILE} />
      <label className="caption">- in Switzerland Mürren</label>
      <p>Pandajiny.</p>
      <div className="introduce">
        <label className="name">Kim Hwan Jin</label>
        <label>Web developer {"&"} Traveler</label>
      </div>
      <Information type="mail" content="astic1764@gmail.com" />
      <Information type="phone" content="+82 10-7556-9094" />
      <div className="sns-icons">
        <IconGithub />
        <IconInstagram />
      </div>
    </div>
  );
};
