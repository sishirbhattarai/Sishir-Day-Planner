
function day(){
    var today = moment().format('dddd MMMM Do YYYY');
    $("#currentDay").text(today);
    console.log(today)
    
}

day();