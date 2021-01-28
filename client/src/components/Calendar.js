import React from "react";
import { Container, Row, Col } from "reactstrap";
import { getCurrentMonth, getDateArray } from "../js/utility.js";
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
const currentDay = getcurrentDate.getDate();
const currentMonth = getcurrentDate.getMonth();
const currentYear = getcurrentDate.getFullYear();
const visableDaysArray = getDateArray(currentMonth, currentYear);
const month = getCurrentMonth(currentYear, currentMonth, currentDay);
const shiftEntries = {
  "13": {
    name: "Asher",
    timeStart: 1000,
    timeEnd: 1600,
  },
  "111": {
    name: "Asher",
    timeStart: 900,
    timeEnd: 1730,
  },
  "121": {
    name: "Asher",
    timeStart: 900,
    timeEnd: 1730,
  },
  "11": {
    name: "Asher",
    timeStart: 900,
    timeEnd: 1730,
  },
};

// don't know the best way to get the data from "shiftEntries" into the DayEntry
// component.

const addShiftsToDaysArray = (arr) => {
  for (let week of arr) {
    for (let dayEl of week) {
      let arrayDayId = dayEl.dayId;
      // arrayDayId.toString();
      if (shiftEntries[arrayDayId]) {
        dayEl.name = shiftEntries[arrayDayId].name;
        dayEl.timeStart = shiftEntries[arrayDayId].timeStart;
        dayEl.timeEnd = shiftEntries[arrayDayId].timeEnd;
      }
    }
  }
};

addShiftsToDaysArray(visableDaysArray);

const Calendar = (props) => {
  return (
    <Container>
      <Row>
        <h1>{month}</h1>
      </Row>
      <Row>
        {days.map((day) => (
          <Col>{day}</Col>
        ))}
      </Row>
      {visableDaysArray.map((el) => {
        return (
          <Row>
            {el.map(({ dayId, day, name, timeStart, timeEnd }) => (
              <Col id={dayId}>
                {day}
                <DayEntry name={name} timeStart={timeStart} timeEnd={timeEnd} />
              </Col>
            ))}
          </Row>
        );
      })}
    </Container>
  );
};

export default Calendar;
