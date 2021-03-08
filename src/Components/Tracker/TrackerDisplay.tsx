import React from "react";
import { ITrackerTime } from "./Tracker";

interface ITrackerDisplayProps {
  trackerTime: ITrackerTime;
}

export const TrackerDisplay: React.FC<ITrackerDisplayProps> = ({
  trackerTime,
}) => {
  return (
    <>
      Elapsed Time - {trackerTime.hours < 10 ? "0" : ""}
      {trackerTime.hours}:{trackerTime.minutes < 10 ? "0" : ""}
      {trackerTime.minutes}:{trackerTime.seconds < 10 ? "0" : ""}
      {trackerTime.seconds}
    </>
  );
};
