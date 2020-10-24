//Use of `moment()` to display the day of the week at the very top of the page
$(document).ready(function() {

function day() {
  var today = moment().format("dddd MMMM Do YYYY hh:mm:ss a");
  $("#currentDay").text(today);
  console.log(today);
}
day();

var storedInput = JSON.parse(window.localStorage.getItem("schedule")) || {};


function updateColor() {
  var currentHour = new Date().getHours();

  $(".info").each(function () {
    var blockTime = parseInt($(this).attr("data-time"));
console.log(blockTime)

    if (currentHour > blockTime) {
      $(this).addClass("past");
    } else if (currentHour < blockTime) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

$(".saveBtn").on("click", function () {
//var userInput = $(this).siblings(".info").val();
  // var blockHour = parseInt($(this).attr("data-hour"));
var userInput = $(this).parent().find("textarea").val();
 // var time = $(this).parent().attr("id");
 var timeblockHour = $(this).parent().find("textarea").attr("data-time");
storedInput[timeblockHour] = userInput
 
window.localStorage.setItem("schedule", JSON.stringify(storedInput));
var test = JSON.parse(window.localStorage.getItem("schedule"));

console.log('retieved data object: ', test)
});

updateColor();

function init() {
  for (var i = 9; i <= 17; i++) {
    $("[data-time=" + i + "]").val(storedInput[i])
  }
}

init();
});

