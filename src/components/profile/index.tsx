import React from "react";
import "./index.scss";
import IMAGE_PROFILE from "@images/image_profile.jpg";
import {
  IconGithub,
  IconInstagram,
  IconMail,
  IconPhone,
  IconWeb,
} from "../icons";

interface InformationProps {
  type: "mail" | "phone" | "web";
  content: string;
}

const Information = ({ type, content }: InformationProps) => {
  const Icon = () => {
    switch (type) {
      case "mail":
        return IconMail();
      case "phone":
        return IconPhone();
      case "web":
        return IconWeb();
    }
  };

  return (
    <div className="information">
      <Icon />
      {type == "web" ? (
        <a href={content}>{content}</a>
      ) : (
        <label>{content}</label>
      )}
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
      <Information type="web" content="https://pandajiny.tistory.com" />
      <div className="sns-icons">
        <IconGithub />
        <IconInstagram />
      </div>
    </div>
  );
};
