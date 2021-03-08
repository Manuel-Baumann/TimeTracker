import React from "react";
import { useState } from "react";
import { DescriptionArea } from "./DescriptionArea";
import { SubmitDescriptionButton } from "./SubmitDescriptionButton";

interface IEnterDescription {
  onClick: (input: string) => void;
}

export const EnterDescription: React.FC<IEnterDescription> = ({ onClick }) => {
  const [input, setInput] = useState("");

  const HandleDescriptionAreaChange = (textArea: string) => {
    setInput(textArea);
  };

  const HandleSubmitDescriptionButtonClick = () => {
    onClick(input);
  };
  return (
    <>
      <DescriptionArea onChange={HandleDescriptionAreaChange} />
      <SubmitDescriptionButton onClick={HandleSubmitDescriptionButtonClick} />
    </>
  );
};
