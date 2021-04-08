import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { monthObject } from "../js/utility.js";
import DayEntry from "./DayEntry";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const getcurrentDate = new Date();
const shiftEntries = {
  "332021": {
    name: "Asher",
    timeStart: 1000,
    timeEnd: 1600,
  },
  "3112021": {
    name: "Asher",
    timeStart: 900,
    timeEnd: 1730,
  },
  "312021": {
    name: "Asher",
    timeStart: 900,
    timeEnd: 1730,
  },
  "372021": {
    name: "Asher",
    timeStart: 900,
    timeEnd: 1730,
  },
  "3262021": {
    name: "Asher",
    timeStart: 900,
    timeEnd: 1730,
  },
};

// this could be abstracted to utility.js??
const addShiftsToDaysArray = (arr) => {
  // for (let week of arr) {
  for (let day of arr) {
    // for (let day of week) {
    let arrayDayId = day.dayId;
    if (shiftEntries[arrayDayId]) {
      day.name = shiftEntries[arrayDayId].name;
      day.timeStart = shiftEntries[arrayDayId].timeStart;
      day.timeEnd = shiftEntries[arrayDayId].timeEnd;
    }
    // }
  }
};

const Calendar = (props) => {
  // need to convert all these to useState
  const [currentDay, setCurrentDay] = useState(getcurrentDate.getDate());
  const [currentMonth, setCurrentMonth] = useState(getcurrentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(getcurrentDate.getFullYear());

  const handleIncrease = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDecrease = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const displayMonth = monthObject(currentYear, currentMonth, currentDay);

  addShiftsToDaysArray(displayMonth.visableDays);

  return (
    <>
      <Container>
        <button onClick={handleDecrease}>Prev</button>
        <button onClick={handleIncrease}>Next</button>
      </Container>
      <Container>
        <Row>
          <h1>{displayMonth.name}</h1>
        </Row>
        <Row>
          {days.map((day) => (
            <Col>{day}</Col>
          ))}
        </Row>
        {displayMonth.visableDays.map((el) => {
          return (
            <Row>
              {el.map(({ dayId, day, name, timeStart, timeEnd }) => (
                <Col id={dayId}>
                  {day}
                  <DayEntry
                    name={name}
                    timeStart={timeStart}
                    timeEnd={timeEnd}
                  />
                </Col>
              ))}
            </Row>
          );
        })}
      </Container>
    </>
  );
};

export default Calendar;
