











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