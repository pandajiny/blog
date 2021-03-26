import React from "react";
import "./index.scss";

interface IconProps {
  src: string;
  size?: number;
  onClick?: () => void;
}

export const Icon = ({ src, size, onClick }: IconProps) => {
  return (
    <div
      className="icon"
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
