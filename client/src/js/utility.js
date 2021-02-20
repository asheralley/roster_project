// utility funtions for Calendar component
// Function to get the current month based on date passed in at execution
export function getCurrentMonth(year, month, day) {
  const getCurrentDate = new Date(year, month, day);
  const currentMonthIndex = getCurrentDate.getMonth();
  // const currentYear = getCurrentDate.getFullYear();
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
  ];

  const currentMonth = months[currentMonthIndex];

  // function to determine number of days in a given month
  // use non-zero index for month here
  return currentMonth;
}

// function to generate an array of 6 'weeks' arrays with an object as each day
// this generated from a month and a year passed in as parameters
export function getDateArray(currMonth, currYear) {
  // variable declerations
  let dateArray = [];
  let firstOfMonth = new Date(currYear, currMonth);
  let monthStartDayIndex = firstOfMonth.getDay();
  // working with dates is fun! -> have to offset dates as business weeks typically
  // start on a monday not a sunday. -> day array used to get the name of days starts
  // with a monday, thus days have to be offset as Javascript starts its week on
  // a Sunday
  let offSetDateIndex = monthStartDayIndex - 1 < 0 ? 6 : monthStartDayIndex - 1;
  // Also months are not zero indexed in Javascript -> awesome
  let currentMonthOffset = currMonth + 1 > 12 ? 1 : currMonth + 1;
  let previousMonthIndexOffset =
    currentMonthOffset - 1 < 0 ? 11 : currentMonthOffset - 1;
  let daysInPreviousMonth = daysInMonth(previousMonthIndexOffset, currYear);
  let daysInCurrentMonth = daysInMonth(currentMonthOffset, currYear);
  let dayNumber;
  if (offSetDateIndex === 0) {
    dayNumber = 1;
  } else {
    dayNumber = daysInPreviousMonth - offSetDateIndex + 1;
  }

  console.log(dayNumber); // -> this is 32?!! what is going on??!!
  console.log(daysInPreviousMonth); // correct!! 31
  console.log(daysInCurrentMonth); // correct! 28
  console.log(offSetDateIndex); // correct!! 0
  console.log(monthStartDayIndex); // correct!! 1

  // function to determine the number of days in a given month
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

  if (dayNumber !== 1) {
    for (let i = dayNumber; i <= daysInPreviousMonth; i++) {
      // console.log(dayNumber);
      dateArray.push({
        day: dayNumber,
        dayId: `${previousMonthIndexOffset}${dayNumber}`,
      });
      dayNumber++;
      if (dayNumber > daysInPreviousMonth) {
        dayNumber = 1;
        break;
      }
    }
  }

  for (let i = dayNumber; i <= daysInCurrentMonth; i++) {
    dateArray.push({
      day: dayNumber,
      dayId: `${currentMonthOffset}${dayNumber}`,
    });
    dayNumber++;
    if (dayNumber > daysInCurrentMonth) {
      dayNumber = 1;
      break;
    }
  }

  for (let i = dayNumber; dateArray.length < 42; i++) {
    dateArray.push({
      day: dayNumber,
      dayId: `${currentMonthOffset + 1}${dayNumber}`,
    });
    dayNumber++;
  }

  function splitArray(array) {
    let arrayOfArrays = [];
    while (array.length > 0) {
      let arrayElement = array.splice(0, 7);
      arrayOfArrays.push(arrayElement);
    }
    return arrayOfArrays;
  }

  dateArray = splitArray(dateArray);
  return dateArray;
}
