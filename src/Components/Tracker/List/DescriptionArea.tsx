import React from "react";
import { Input } from "antd";
import "antd/dist/antd.css";

interface IDescriptionAreaProps {
  onChange: (e: string) => void;
}

export const DescriptionArea: React.FC<IDescriptionAreaProps> = ({
  onChange,
}) => {
  const onInputChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return <Input.TextArea rows={1} onChange={(e) => onInputChangeHandler(e)} />;
};
