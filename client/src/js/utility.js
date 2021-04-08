// utility funtions for Calendar component
// Function to get the current month based on date passed in at execution
// May need to think about making this a custom hook -> useDate?
export function monthObject(year, month, day) {
  function getCurrentMonth() {
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
  function getDateArray() {
    // variable declerations
    let dateArray = [];
    let firstOfMonth = new Date(year, month);
    let monthStartDayIndex = firstOfMonth.getDay();
    // working with dates is fun! -> have to offset dates as business weeks typically
    // start on a monday not a sunday. -> day array used to get the name of days starts
    // with a monday, thus days have to be offset as Javascript starts its week on
    // a Sunday
    // ************************************************
    // May be able to simplify this as it may be easier to work with a Sunday first
    // array
    // ************************************************
    let offSetDateIndex =
      monthStartDayIndex - 1 < 0 ? 6 : monthStartDayIndex - 1;
    let currentMonthOffset = month + 1 > 12 ? 1 : month + 1;
    let previousMonthIndexOffset =
      currentMonthOffset - 1 <= 0 ? 12 : currentMonthOffset - 1;
    let daysInPreviousMonth = daysInMonth(previousMonthIndexOffset, year);
    let daysInCurrentMonth = daysInMonth(currentMonthOffset, year);

    let dayNumber;
    if (offSetDateIndex === 0) {
      dayNumber = 1;
    } else {
      dayNumber = daysInPreviousMonth - offSetDateIndex + 1;
    }

    // function to determine the number of days in a given month
    function daysInMonth(m, y) {
      return new Date(y, m, 0).getDate();
    }

    // ************************************************
    // All this is messy -> needs a refactor
    // consdier not using objects for days
    // separate calendar from day entry logic
    if (dayNumber !== 1) {
      for (let i = dayNumber; i <= daysInPreviousMonth; i++) {
        dateArray.push({
          day: dayNumber,
          dayId: `${currentMonthOffset}${dayNumber}${year}`,
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
        dayId: `${currentMonthOffset}${dayNumber}${year}`,
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
        dayId: `${currentMonthOffset + 1}${dayNumber}${year}`,
      });
      dayNumber++;
    }
    // ************************************************

    function splitArray(array) {
      let arrayOfArrays = [];
      while (array.length > 0) {
        let arrayElement = array.splice(0, 7);
        arrayOfArrays.push(arrayElement);
      }
      return arrayOfArrays;
    }

    // dateArray = splitArray(dateArray);
    return dateArray;
  }

  // may need to convert this to class declaration?
  function Month(name, visableDays) {
    this.name = name;
    this.visableDays = visableDays;
  }

  return new Month(getCurrentMonth(), getDateArray());
}
