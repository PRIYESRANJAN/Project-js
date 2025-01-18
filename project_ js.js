function validateDateOfBirth(inputDate) {
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const maxDate = new Date(today.getFullYear() - 55, today.getMonth(), today.getDate());

    const dateParts = inputDate.split('-');
    const inputYear = parseInt(dateParts[2], 10);
    const inputMonth = parseInt(dateParts[1], 10) - 1; // Months are 0-based
    const inputDay = parseInt(dateParts[0], 10);
    const birthDate = new Date(inputYear, inputMonth, inputDay);

    if (birthDate > minDate || birthDate < maxDate) {
        return false; // Invalid date
    }
    return true; // Valid date
}
