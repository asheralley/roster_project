// utility funtions for Calendar component
function daysInMonth(month, year) {
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

  const firstOfMonth = new Date(`${currentMonth} 1, ${currentYear}`);
  const monthStartDayIndex = firstOfMonth.getDay();
  // may need to make offSetDateIndex a function
  let offSetDateIndex = monthStartDayIndex - 1 < 0 ? 6 : monthStartDayIndex - 1;
  const monthStartDay = days[offSetDateIndex];

  // function to determine number of days in a given month
  // use non-zero index for month here
  return new Date(year, month, 0).getDate();
}

// week -> row
// day that month starts on
// how many days in month -> how many weeks
// easier to just build a 7x6 grid and populate with dates => then shift data

// build array of dates based on current month then add to a grid of 7x6 'days'

// what do i need to produce here...
// an array that looks like this [29, 30, 31, 1, 2, 3, ..., 31]
// -> alternatively i could have an array of weeks?
// -> [[29, 30, 31, 1, 2, 3, 4], [5, 6, 7, ...], ...];
// so i need currentmonth, number of days in currentmonth, number of days in
// previous month, day that current month starts on.
// When i start looping i will need to keep track of the weeks in some way.

function getDateArray(currMonth, currYear) {
  let dateArray = [];
  let currentMonthOffset = currMonth + 1 > 12 ? 1 : currMonth + 1;
  let previousMonthIndexOffset =
    currentMonthOffset - 1 < 0 ? 11 : currentMonthOffset - 1;
  let daysInPreviousMonth = daysInMonth(previousMonthIndexOffset, currYear);
  let daysInCurrentMonth = daysInMonth(currentMonthOffset, currYear);
  let dayNumber = daysInPreviousMonth - offSetDateIndex + 1;

  for (let i = dayNumber; i <= daysInPreviousMonth; i++) {
    dateArray.push(dayNumber);
    dayNumber++;
    if (dayNumber > daysInPreviousMonth) {
      dayNumber = 1;
      break;
    }
  }

  for (let i = dayNumber; i <= daysInCurrentMonth; i++) {
    dateArray.push(dayNumber);
    dayNumber++;
    if (dayNumber > daysInCurrentMonth) {
      dayNumber = 1;
      break;
    }
  }

  for (let i = dayNumber; dateArray.length < 42; i++) {
    dateArray.push(dayNumber);
    dayNumber++;
  }

  return dateArray;
}

function splitArray(array) {
  let arrayOfArrays = [];
  while (array.length > 0) {
    let arrayElement = array.splice(0, 7);
    arrayOfArrays.push(arrayElement);
  }
  return arrayOfArrays;
}
