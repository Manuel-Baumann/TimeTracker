import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";

interface IAddDescriptionButtonProps {
  onClick: () => void;
}

export const AddDescriptionButton: React.FC<IAddDescriptionButtonProps> = ({
  onClick,
}) => {
  const HandleAddDescriptionButtonClick = () => {
    onClick();
  };
  return (
    <>
      <Button onClick={HandleAddDescriptionButtonClick}>Add Description</Button>
    </>
  );
};
