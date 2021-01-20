import React from "react";
import { Container, Row, Col } from "reactstrap";
import DayEntry from "./DayEntry";

const daysArrayTest = getDateArray(currentMonthIndex, currentYear);
const test = splitArray(daysArrayTest);

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
      {test.map((el) => {
        return (
          <Row>
            {el.map((dayEl) => (
              <Col>{dayEl}</Col>
            ))}
          </Row>
        );
      })}
    </Container>
  );
};

export default Calendar;
