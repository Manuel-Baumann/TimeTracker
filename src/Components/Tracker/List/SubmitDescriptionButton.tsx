import React from "react";
import "antd/dist/antd.css";
import { Button } from "antd";

interface ISubmitDescriptionButton {
  onClick: () => void;
}

export const SubmitDescriptionButton: React.FC<ISubmitDescriptionButton> = ({
  onClick,
}) => {
  const HandleSubmitDescriptionButtonClick = () => {
    onClick();
  };
  return (
    <>
      <Button onClick={HandleSubmitDescriptionButtonClick}>
        Submit Description
      </Button>
    </>
  );
};
