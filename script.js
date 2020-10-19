//Use of `moment()` to display the day of the week at the very top of the page

function day() {
  var today = moment().format('dddd MMMM Do YYYY hh:mm:ss a');
  $("#currentDay").text(today);
  console.log(today);
}
day();

var currentTime = moment().format('dddd MMMM Do YYYY hh:mm:ss a');
console.log(currentTime);

var currentHour = new Date().getHours() - 12;
console.log(currentHour);



var storedInput = JSON.parse(localStorage.getItem("schedule"));

//console.log(schedule);

$("#inlineFormInput").each(function() {
    var blockTime = $(this).attr("class").text;
    var currentHour = new Date().getHours() - 12;

//   if (currentHour > blockTime) {
//     $(this).addClass("present");

//   } else if (blockTime === currentHour) {
//     $(this).addClass("present")

// } else {
//     $(this).addClass("future")
// }
  
});


$(".saveBtn").on("click", function() {
  
  var userInput = $(this).attr("textarea").val();
  var blockTime = $(this).attr("p")
  localStorage.setItem(blockTime, userInput);
console.log(localStorage)
});





// for (var i = 0; i < clockTime.length; i++) {

//   var newDiv = $("<div>");

//   $(".row").append(newDiv);
//   $(".col-md-2").append(newDiv);
//  // $(".col-md-2").$("#time").append(newDiv);
//   $(".time").text(clockTime[i]);
//   console.log("I am cool");


// }
// for (i = 0, i < clockTime.length, i++){
//   today.text 
// }




// if (today < clockTime[i]) {
//   $(".col-lg-8").css("background-color", "green");
