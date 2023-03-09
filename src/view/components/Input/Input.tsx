import React from "react";
import "./Input.style.scss";

export interface InputProps {
  className: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ className, type }) => {
  return (
    <div className={className}>
      <input type={type} />
    </div>
  );
};

export default Input;
