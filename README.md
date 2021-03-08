# Take-Home Aufgabe: Time Tracker

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I used Ant Design for some of my components.

## Bugs

- After pausing the timer, waiting for a second and starting the timer again, the timer jumps directly to the next second -> By comparing milliseconds, this bug should be solved.
- By manually booking a time, the hours are not in a 24-hour-format. -> Easy to solve, but I am in a little time trouble.
- Pagination does a few things I don't want it to do, so I excluded it. You can include it by typing in Row 36 in TrackerList.tsx "trimmedList" instead of "timeKeeper"

## Comments

I hardly used comments because I think the code is well-written and mostly self-explainatory. Though, maybe there are some things I forgot to explain.

## Style

With a little more time I could have added some style.

## What I didn't do

I didn't really know how to add a filter for the descriptions, though with more time I maybe could have thought of something.
