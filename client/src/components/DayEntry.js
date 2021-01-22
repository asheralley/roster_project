import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const DayEntry = (props) => {
  let day1 = new Date(2021, 0, 12);
  let day2 = new Date(2021, 0, 13);

  let [month, day, year] = day1.toLocaleDateString().split("/");
  day1 = `${day}, ${month}, ${year}`;
  const date2 = day2.toLocaleDateString();

  const shiftEntries = [
    {
      id: uuidv4(),
      name: "Asher",
      timeStart: 1000,
      timeEnd: 1600,
      date: day1,
    },
    {
      id: uuidv4(),
      name: "Asher",
      timeStart: 900,
      timeEnd: 1730,
      date: date2,
    },
  ];

  return <></>;
};

export default DayEntry;
