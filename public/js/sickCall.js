var sickCallDateInput = document.getElementById("sickCallDateInput");

var todaysDate = new Date(); // Get today's date.

// Get today's date.

var year = todaysDate.getFullYear(); // yyyy

var month = ("0" + (todaysDate.getMonth() + 1)).slice(-2); // mm

var day = ("0" + todaysDate.getDate()).slice(-2); // dd

var dtToday = year + "-" + month + "-" + day; // Results in yyyy-mm-dd

// Now set the max date value for the calendar to be that date.

//$(".Past input").attr("max", dtToday);


sickCallDateInput.setAttribute('min', dtToday);