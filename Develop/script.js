var now = dayjs();
var nowHour = dayjs().format('h');

// Text hour var
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var sixPm = $("#18pm");
var sevenPm = $("#19pm");

var hour = dayjs().hour();
var userInput;
var Span = $(".hour");

// Date and Hour
function renderTime() {
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
}
renderTime();
// setInterval(renderTime, 1000);

function init() {
  // console.log("Current Hour " + hour);
  var init9 = JSON.parse(localStorage.getItem("9:00 am"));
  if (init9 !== null) {
    nineAm.val(init9);
  }
  var init10 = JSON.parse(localStorage.getItem("10:00 am"))
  if (init10 !== null) {
    tenAm.val(init10);
  }
  var init11 = JSON.parse(localStorage.getItem("11:00 am"))
  if (init11 !== null) {
    elevenAm.val(init11);
  };
  var init12 = JSON.parse(localStorage.getItem("12:00 pm"))
  if (init12 !==null){
    twelvePm.val(init12);
  };
  var init1 = JSON.parse(localStorage.getItem("1:00 pm"))
  if (init1 !==null){
    onePm.val(init1);
  };
  var init2 = JSON.parse(localStorage.getItem("2:00 pm"))
  if (init2 !==null){
    twoPm.val(init2);
  };
  var init3 = JSON.parse(localStorage.getItem("3:00 pm"))
  if (init3 !==null){
    threePm.val(init3);
  };
  var init4 = JSON.parse(localStorage.getItem("4:00 pm"))
  if (init4 !==null){
    fourPm.val(init4);
  };
  var init5 = JSON.parse(localStorage.getItem("5:00 pm"))
  if (init5 !==null){
    fivePm.val(init5);
  };
  var init6 = JSON.parse(localStorage.getItem("6:00 pm"))
  if (init6 !==null){
    sixPm.val(init6);
  }; 
} 

function timeStatus() {
  $(".form-control").each(function () {
      var timeTest = parseInt($(".form-control").attr("id"));
      nowHour = parseInt(hour);
      // console.log(timeTest);
      // console.log(hour);
      // console.log(".form-control");
      if (nowHour > timeTest) {
          $(".form-control").addClass("past");
      } else if (nowHourour < timeTest) {
          $(".form-control").addClass("future");
      } else {
          $(".form-control").addClass("present");
      }
  });
}

$(document).ready(function(){
  init();
  timeStatus();

  // Buttons (save to Local Storage)
  $(".saveBtn").on("click", function(){
    userInput = $(".saveBtn").siblings(".form-control").val().trim();
    // console.log(userInput);
    Span = $(".saveBtn").siblings(".input-group-prepend").text().trim();
    // console.log(hourSpan);
    localStorage.setItem(Span, JSON.stringify(userInput));
  });
});
  
// Button for clear the day
$("#clearDay").on("click", function(){
  localStorage.clear();
  init();
}) ;