import React from "react";
// import { v4 as uuidv4 } from "uuid";

const DayEntry = (props) => {
  if (props.timeStart == null) {
    return <></>;
  } else {
    return (
      <>
        <p>{props.name}</p>
        <p>
          {props.timeStart} - {props.timeEnd}
        </p>
      </>
    );
  }
};

export default DayEntry;
