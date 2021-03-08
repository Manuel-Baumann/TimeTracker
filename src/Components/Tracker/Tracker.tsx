import React, { useEffect } from "react";
import { useState } from "react";
import { PauseButton } from "./PauseButton";
import { StartButton } from "./StartButton";
import { BookButton } from "./BookButton";
import { TrackerDisplay } from "./TrackerDisplay";
import { TrackerList } from "./List/TrackerList";
import { ManuallyBookButton } from "./ManuallyBookButton";
import { SelectTime } from "./SelectTime";

export interface ITrackerTime {
  seconds: number;
  minutes: number;
  hours: number;
}

export interface IFullTimeInformation {
  time: ITrackerTime;
  description: string;
  dateOfTracking: Date;
  id: number;
}

export const Tracker: React.FC = () => {
  const [lastTime, setLastTime] = useState(Date.now());
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [running, setRunning] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const initialList: IFullTimeInformation[] = [];
  const [timeKeeper, setTimeKeeper] = useState(initialList);

  const [timeNow, setTimeNow] = useState(Date.now());

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => setTimeNow(Date.now()));
      return () => {
        clearInterval(interval);
      };
    }
  }, [running]);

  if (timeNow - lastTime > 1000) {
    setTimerSeconds(timerSeconds + 1);
    setLastTime(timeNow);
  }
  if (timerSeconds === 60) {
    setTimerMinutes(timerMinutes + 1);
    setTimerSeconds(0);
  }
  if (timerMinutes === 60) {
    setTimerHours(timerHours + 1);
    setTimerMinutes(0);
  }

  const trackerTime: ITrackerTime = {
    seconds: timerSeconds,
    minutes: timerMinutes,
    hours: timerHours,
  };

  const handleStartButtonClick = () => {
    setRunning(true);
  };
  const handlePauseButtonClick = () => {
    setRunning(false);
  };
  const handleBookButtonClick = () => {
    const newTimeKeeper: IFullTimeInformation[] = timeKeeper;
    const newEntry: IFullTimeInformation = {
      time: trackerTime,
      description: "",
      dateOfTracking: new Date(),
      id: newTimeKeeper.length,
    };
    setTimeKeeper([...newTimeKeeper, newEntry]);
    setTimerSeconds(0);
    setTimerMinutes(0);
    setTimerHours(0);
    setRunning(false);
  };
  const handleDescriptionChange = (input: string, id: number) => {
    const newTimeKeeper: IFullTimeInformation[] = timeKeeper;
    const newEntry: IFullTimeInformation = {
      time: timeKeeper[id].time,
      description: input,
      dateOfTracking: timeKeeper[id].dateOfTracking,
      id: id,
    };
    //Replacing newEntry with existing entry
    newTimeKeeper.splice(id, 1, newEntry);
    setTimeKeeper(newTimeKeeper);
  };
  const handleManuallyBookButtonClick = () => {
    setShowTimePicker(!showTimePicker);
  };
  const handleSelectTime = (
    sec: number,
    min: number,
    hou: number,
    date: Date
  ) => {
    const selectedTime: ITrackerTime = {
      seconds: sec,
      minutes: min,
      hours: hou,
    };
    const newTimeKeeper: IFullTimeInformation[] = timeKeeper;
    const newEntry: IFullTimeInformation = {
      time: selectedTime,
      description: "",
      dateOfTracking: date,
      id: newTimeKeeper.length,
    };
    setTimeKeeper([...newTimeKeeper, newEntry]);
  };

  return (
    <>
      <StartButton onClick={handleStartButtonClick} />
      <PauseButton onClick={handlePauseButtonClick} />
      <BookButton onClick={handleBookButtonClick} />
      <TrackerDisplay trackerTime={trackerTime} />
      <ManuallyBookButton onClick={handleManuallyBookButtonClick} />
      {showTimePicker && <SelectTime onSelectTime={handleSelectTime} />}
      <TrackerList
        timeKeeper={timeKeeper}
        onDescriptionChange={handleDescriptionChange}
      />
    </>
  );
};
