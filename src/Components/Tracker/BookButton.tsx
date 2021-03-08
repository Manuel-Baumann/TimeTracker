import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";

interface IBookButtonProps {
  onClick: () => void;
}

export const BookButton: React.FC<IBookButtonProps> = ({ onClick }) => {
  const HandleBookButtonClick = () => {
    onClick();
  };
  return (
    <>
      <Button onClick={HandleBookButtonClick}>Book Time</Button>
    </>
  );
};
