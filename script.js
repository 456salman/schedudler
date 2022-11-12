
const todayDate = moment().format('dddd, MMM Do YYYY');
$("#dayTime").html(todayDate);

$(document).ready(function () {

    $("#h8 .description").val(localStorage.getItem("h8"));
    $("#h9 .description").val(localStorage.getItem("h9"));
    $("#h10 .description").val(localStorage.getItem("h10"));
    $("#h11 .description").val(localStorage.getItem("h11"));
    $("#h12 .description").val(localStorage.getItem("h12"));
    $("#h1 .description").val(localStorage.getItem("h1"));
    $("#h2 .description").val(localStorage.getItem("h2"));
    $("#h3 .description").val(localStorage.getItem("h3"));
    $("#h4 .description").val(localStorage.getItem("h4"));
    $("#h5 .description").val(localStorage.getItem("h5"));
    $("#h6 .description").val(localStorage.getItem("h6"));
   
    $(".saveBtn").on("click", function () {
     const text = $(this).siblings(".description").val();
     const time = $(this).parent().attr("id");
     localStorage.setItem(time, text);
    })
   
    function timeB() {
    const time = moment().hour();
    $(".tBox").each(function () {
    const boxT = parseInt($(this).attr("id").split("hour")[1]);
    if (boxT === time) {
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
    } 
    else if (boxT < time) {
    $(this).removeClass("future");
    $(this).removeClass("present");
     $(this).addClass("past");
    }
    else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");

            }
        })
    }

    
 
    timeB();
})