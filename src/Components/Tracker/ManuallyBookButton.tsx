import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";

interface IManuallyBookButtonProps {
  onClick: () => void;
}

export const ManuallyBookButton: React.FC<IManuallyBookButtonProps> = ({
  onClick,
}) => {
  const HandleManuallyBookButtonClick = () => {
    onClick();
  };
  return (
    <>
      <Button onClick={HandleManuallyBookButtonClick}>
        Manually Book Time
      </Button>
    </>
  );
};
