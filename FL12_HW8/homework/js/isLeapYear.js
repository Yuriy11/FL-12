function isLeapYear(inputDate) {
    let date = new Date(inputDate);
    if (date.getFullYear() % 4 === 0) {
        return date.getFullYear.toString + "is a leap year"
    }
    return 'else todo';
}