import React from "react";
import { Container, Row, Col } from "reactstrap";

const getCurrentDate = new Date();
const currentDate = getCurrentDate.getDate();
const currentDay = getCurrentDate.getDay();
const currentMonthIndex = getCurrentDate.getMonth();
const currentYear = getCurrentDate.getFullYear();
const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

const currentMonth = months[currentMonthIndex];

const firstOfMonth = new Date(`August 1, ${currentYear}`);
const monthStartDayIndex = firstOfMonth.getDay();
let offSetDateIndex = monthStartDayIndex - 1 < 0 ? 6 : monthStartDayIndex - 1;
const monthStartDay = days[offSetDateIndex];

console.log(offSetDateIndex);
// week -> row
// day that month starts on
// how many days in month -> how many weeks
const Calendar = (props) => {
  return (
    <Container>
      <Row>
        <h1>{currentMonth}</h1>
      </Row>
      <Row>
        {days.map((day) => (
          <Col>{day}</Col>
        ))}
      </Row>
    </Container>
  );
};

export default Calendar;
