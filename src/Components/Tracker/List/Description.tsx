import React, { useState } from "react";
import { AddDescriptionButton } from "./AddDescriptionButton";
import { EnterDescription } from "./EnterDescription";

interface IDescriptionProps {
  onDescriptionChange: (input: string, id: number) => void;
  description: string;
  id: number;
}

export const Description: React.FC<IDescriptionProps> = ({
  onDescriptionChange,
  description,
  id,
}) => {
  const [showAddDescriptionButton, setShowDescriptionButton] = useState(true);
  const [showDescriptionArea, setShowDescriptionArea] = useState(false);
  const [desc, setDesc] = useState(description);

  const HandleAddDescriptionButtonClick = () => {
    setShowDescriptionButton(false);
    setShowDescriptionArea(true);
  };

  const HandleEnterDescriptionClick = (input: string) => {
    setShowDescriptionArea(false);
    onDescriptionChange(input, id);
    setDesc(input);
  };

  return (
    <>
      {showAddDescriptionButton && (
        <AddDescriptionButton onClick={HandleAddDescriptionButtonClick} />
      )}
      {!showAddDescriptionButton && showDescriptionArea && (
        <EnterDescription onClick={HandleEnterDescriptionClick} />
      )}
      {!showAddDescriptionButton && !showDescriptionArea && desc}
    </>
  );
};
