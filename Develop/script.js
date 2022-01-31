const m = moment();
//console.log(m.toString());
//console.log(m.format("dddd MMM Mo YYYY"));
//console.log(m.format("[the day is] dddd [and we are in] YYYY"));
console.log(m.format("L"));

var displayDate = function(){
    $("#currentDay").append(m.format("L"));
}











//hour9 
//hour10
//hour11
//hour12
//hour1
//hour2 
//hour3 
//hour4 
//hour5

var saveTasks = function(event) {
    console.log(event.target)
    var textValue = $("." + event.target.id).val();
    console.log(textValue);
    localStorage.setItem(event.target.id, textValue);
}


var loadTasks = function() {
    var hour9 = localStorage.getItem("hour9");
    $(".hour9").val(hour9)
}
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all task status arrays
}
displayDate();