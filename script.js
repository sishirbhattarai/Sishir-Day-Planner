//Use of `moment()` to display the day of the week at the very top of the page

function day() {
  var today = moment().format('dddd MMMM Do YYYY hh:mm:ss a');
  $("#currentDay").text(today);
  console.log(today);
}
day();

//var currentTime = moment().format('dddd MMMM Do YYYY hh:mm:ss a');

var storedInput = window.localStorage.getItem("schedule");

function updateColor() {

  var currentHour = new Date().getHours();
  console.log(currentHour);

$(".info").each(function() {
  
    var blockTime = parseInt($(this).attr("data-time"));

  console.log(blockTime);

  if (currentHour > blockTime) {
     $(this).addClass("past");

  
  } else if (currentHour < blockTime) {
       $(this).addClass("present");

} else {
    $(this).addClass("future");
}
  
});
};

$(".saveBtn").on("click", function() {
  
  //var userInput = $(this).siblings(".info").val();
  var blockTime = $(this).attr("data-time")
  var userInput = $(this).parent().find("textarea").val();

  window.localStorage.setItem(blockTime, userInput);
console.log(localStorage)
});

updateColor();



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
