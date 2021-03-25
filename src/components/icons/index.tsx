import React from "react";
import "./index.scss";

interface IconProps {
  src: string;
}

export const Icon = ({ src }: IconProps) => {
  return (
    <div className="icon">
      <img src={src}></img>
    </div>
  );
};
