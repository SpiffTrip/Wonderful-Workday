const m = moment();
const h = moment().hour;
var hour9 = $("hour").text("9AM");
var hour10 = $("hour").text("10AM");
var hour11 = $("hour").text("11AM");
var hour12 = $("hour").text("12AM");
var hour1 = $("hour").text("1PM");
var hour2 = $("hour").text("2PM");
var hour3 = $("hour").text("3PM");
var hour4 = $("hour").text("4PM");
var hour5 = $("hour").text("5PM");

//console.log(m.toString());
//console.log(m.format("dddd MMM Mo YYYY"));
//console.log(m.format("[the day is] dddd [and we are in] YYYY"));
console.log(m.format("L"));

var displayDate = function () {
    $("#currentDay").append(m.format("L"));
}






var saveTasks = function () {


    document.getElementById("saveBtn9").addEventListener("click", function () {
        var D9 = document.getElementById("description9").value;
        localStorage.setItem("description9", D9);



        document.getElementById("saveBtn10").addEventListener("click", function () {
            var D10 = document.getElementById("description10").value;
            localStorage.setItem("description10", D10);



            document.getElementById("saveBtn11").addEventListener("click", function () {
                var D11 = document.getElementById("description11").value;
                localStorage.setItem("description11", D11);



                document.getElementById("saveBtn12").addEventListener("click", function () {
                    var D12 = document.getElementById("description12").value;
                    localStorage.setItem("description12", D12);



                    document.getElementById("saveBtn1").addEventListener("click", function () {
                        var D1 = document.getElementById("description1").value;
                        localStorage.setItem("description1", D1);



                        document.getElementById("saveBtn2").addEventListener("click", function () {
                            var D2 = document.getElementById("description2").value;
                            localStorage.setItem("description2", D2);



                            document.getElementById("saveBtn3").addEventListener("click", function () {
                                var D3 = document.getElementById("description3").value;
                                localStorage.setItem("description3", D3);



                                document.getElementById("saveBtn4").addEventListener("click", function () {
                                    var D4 = document.getElementById("description4").value;
                                    localStorage.setItem("description4", D4);



                                    document.getElementById("saveBtn5").addEventListener("click", function () {
                                        var D5 = document.getElementById("description5").value;
                                        localStorage.setItem("description5", D5);



                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });


}

var loadTasks = function () {
    const D9done = localStorage.getItem("description9")
    const D10done = localStorage.getItem("description10")
    const D11done = localStorage.getItem("description11")
    const D12done = localStorage.getItem("description12")
    const D1done = localStorage.getItem("description1")
    const D2done = localStorage.getItem("description2")
    const D3done = localStorage.getItem("description3")
    const D4done = localStorage.getItem("description4")
    const D5done = localStorage.getItem("description5")

        var DD9 = document.getElementById("description9")
        var DD10 = document.getElementById("description10")
        var DD11 = document.getElementById("description11")
        var DD12 = document.getElementById("description12")
        var DD1 = document.getElementById("description1")
        var DD2 = document.getElementById("description2")
        var DD3 = document.getElementById("description3")
        var DD4 = document.getElementById("description4")
        var DD5 = document.getElementById("description5")

        DD9.value = D9done;
        DD10.value = D10done;
        DD11.value = D11done;
        DD12.value = D12done;
        DD1.value = D1done;
        DD2.value = D2done;
        DD3.value = D3done;
        DD4.value = D4done;
        DD5.value = D5done;
}

loadTasks();


//changeTime();
saveTasks();

displayDate();