import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";

interface IPauseButtonProps {
  onClick: () => void;
}

export const PauseButton: React.FC<IPauseButtonProps> = ({ onClick }) => {
  const HandlePauseButtonClick = () => {
    onClick();
  };
  return (
    <>
      <Button onClick={HandlePauseButtonClick}>Pause Tracker</Button>
    </>
  );
};
