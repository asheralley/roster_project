import React from "react";
import { Container, Row, Col } from "reactstrap";
import { getCurrentMonth, getDateArray } from "../js/utility.js";
import DayEntry from "./DayEntry";

// const daysArrayTest = getDateArray(currentMonthIndex, currentYear);
// const test = splitArray(daysArrayTest);
// const currentMonth = visableDaysArray.testMonthValue;
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
const currentDay = getcurrentDate.getDay();
const currentMonth = getcurrentDate.getMonth();
const currentYear = getcurrentDate.getFullYear();
const visableDaysArray = getDateArray(currentMonth, currentYear);
const month = getCurrentMonth(currentYear, currentMonth, currentDay);

console.log(visableDaysArray);
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
            {el.map(({ dayId, day }) => (
              <Col id={dayId}>
                <>
                  {day}
                  <DayEntry />
                </>
              </Col>
            ))}
          </Row>
        );
      })}
    </Container>
  );
};

export default Calendar;
