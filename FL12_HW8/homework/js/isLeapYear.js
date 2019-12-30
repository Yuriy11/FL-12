function isLeapYear(inputDate) {
    let date = new Date(inputDate);
    let year = date.getFullYear();
    if (isNaN(year)) {
        return "Invalid Date"
    }
    if (year % 4 !== 0) {
        return year + " is not a leap year";
    } else if (year % 100 !== 0) {
        return year + " is a leap year";
    } else if (year % 400 !== 0) {
        return year + " is not a leap year";
    } else {
        return year + " is a leap year";
    }
}