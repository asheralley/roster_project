// utility funtions for Calendar component
export function getCurrentMonth(year, month, day) {
  const getCurrentDate = new Date(year, month, day);
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
  ];

  const currentMonth = months[currentMonthIndex];

  // function to determine number of days in a given month
  // use non-zero index for month here
  return currentMonth;
}

export function getDateArray(currMonth, currYear) {
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  let dateArray = [];
  let firstOfMonth = new Date(currYear, currMonth);
  let monthStartDayIndex = firstOfMonth.getDay();
  let offSetDateIndex = monthStartDayIndex - 1 < 0 ? 6 : monthStartDayIndex - 1;
  let currentMonthOffset = currMonth + 1 > 12 ? 1 : currMonth + 1;
  let previousMonthIndexOffset =
    currentMonthOffset - 1 < 0 ? 11 : currentMonthOffset - 1;
  let daysInPreviousMonth = daysInMonth(previousMonthIndexOffset, currYear);
  let daysInCurrentMonth = daysInMonth(currentMonthOffset, currYear);
  let dayNumber = daysInPreviousMonth - offSetDateIndex + 1;

  for (let i = dayNumber; i <= daysInPreviousMonth; i++) {
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
