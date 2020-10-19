//Use of `moment()` to display the day of the week at the very top of the page

function day() {
  var today = moment().format('dddd MMMM Do YYYY hh:mm:ss a');
  $("#currentDay").text(today);
  console.log(today);
}
day();

var currentTime = moment().calendar(); 
console.log(currentTime);

// var startTime = 0900;
// var endTime = 1700;

// var clockTime = [0900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700];

// var storedInput = localStorage.getItem("schedule");

// $(".time-block").forEach(function() {
//   var blockTime = $(this).attr("p").textContent
//   if (blockTime 
// });


// $(".saveBtn").on("click", function() {
  
//   var userInput = $(this).attr("textarea").val();
//   var blockTime = $(this).attr("p")
//   localStorage.setItem(blockTime, userInput);
// console.log(localStorage)
// });





//for (var i = 0; i < clockTime.length; i++) {

//   var newDiv = $("<div>");

//   $(".row").append(newDiv);
//   $(".col-md-2").append(newDiv);
//  // $(".col-md-2").$("#time").append(newDiv);
//   $(".time").text(clockTime[i]);
//   console.log("I am cool");


//}
// for (i = 0, i < clockTime.length, i++){
//   today.text 
// }




// if (today < clockTime[i]) {
//   $(".col-lg-8").css("background-color", "green");
// }