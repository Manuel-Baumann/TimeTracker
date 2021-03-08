import React from "react";
import "antd/dist/antd.css";
import { List } from "antd";
import { IFullTimeInformation } from "../Tracker";
import { Description } from "./Description";
import { Paginator } from "./Paginator";
import { useState } from "react";

interface ITrackerListProps {
  timeKeeper: IFullTimeInformation[];
  onDescriptionChange: (input: string, id: number) => void;
}
export const TrackerList: React.FC<ITrackerListProps> = ({
  timeKeeper,
  onDescriptionChange,
}) => {
  const [trimmedList, setTrimmedList] = useState(timeKeeper);

  const handleDescriptionChange = (input: string, id: number) => {
    onDescriptionChange(input, id);
  };
  const handlePageChange = (page: number) => {
    if (timeKeeper.length >= page * 4) {
      const newList = timeKeeper.slice((page - 1) * 4, page * 4);
      setTrimmedList(newList);
    } else {
      const newList = timeKeeper.slice((page - 1) * 4, timeKeeper.length);
      setTrimmedList(newList);
    }
  };

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={timeKeeper}
        renderItem={(timeEntry) => (
          <List.Item>
            <List.Item.Meta
              title={`Tracked Time: Hours: ${timeEntry.time.hours} Minutes: ${timeEntry.time.minutes} Seconds: ${timeEntry.time.seconds}`}
              description={`Tracking ended:  ${timeEntry.dateOfTracking.getDate()}.${
                timeEntry.dateOfTracking.getMonth() + 1
              }.${timeEntry.dateOfTracking.getFullYear()} ${timeEntry.dateOfTracking.getHours()}:${timeEntry.dateOfTracking.getMinutes()}`}
            />
            <Description
              onDescriptionChange={handleDescriptionChange}
              description={timeEntry.description}
              id={timeEntry.id}
            />
          </List.Item>
        )}
      />
      <Paginator onChange={handlePageChange} listLength={timeKeeper.length} />
    </>
  );
};
