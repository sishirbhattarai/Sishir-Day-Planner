//Use of `moment()` to display the day of the week at the very top of the page

function day() {
  var today = moment().format("dddd MMMM Do YYYY");
  $("#currentDay").text(today);
  console.log(today);
}
day();

