import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";

interface IStartButtonProps {
  onClick: () => void;
}

export const StartButton: React.FC<IStartButtonProps> = ({ onClick }) => {
  const HandleStartButtonClick = () => {
    onClick();
  };
  return (
    <>
      <Button onClick={HandleStartButtonClick}>Start Tracker</Button>
    </>
  );
};
