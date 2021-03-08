import React from "react";
import "antd/dist/antd.css";
import { TimePicker } from "antd";
import Moment from "moment";

interface ISelectTimeProps {
  onSelectTime: (sec: number, min: number, hou: number, date: Date) => void;
}

export const SelectTime: React.FC<ISelectTimeProps> = ({ onSelectTime }) => {
  const onChange = (time: Moment.Moment | null) => {
    if (time != null) {
      onSelectTime(
        parseInt(time?.format("ss")),
        parseInt(time?.format("mm")),
        parseInt(time?.format("h")),
        new Date()
      );
    }
  };

  return <TimePicker onChange={onChange} />;
};
