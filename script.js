//Use of `moment()` to display the day of the week at the very top of the page

function day() {
  var today = moment().format('dddd MMMM Do YYYY h:mm:ss a');
  $("#currentDay").text(today);
  console.log(today);
}
day();

var currentTime = moment().calendar(); 
console.log(currentTime);

// var startTime = 9;
// var endTime = 5;

// var time = 

