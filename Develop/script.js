currentDay = "";

timeBlockValues = [
  {
    hour: "9am",
    inputValue: "",
  },
  {
    hour: "10am",
    inputValue: "",
  },
  {
    hour: "11am",
    inputValue: "",
  },
  {
    hour: "12pm",
    inputValue: "",
  },
  {
    hour: "1pm",
    inputValue: "",
  },
  {
    hour: "2pm",
    inputValue: "",
  },
  {
    hour: "3pm",
    inputValue: "",
  },
  {
    hour: "4pm",
    inputValue: "",
  },
  {
    hour: "5pm",
    inputValue: "",
  },
];
var scheduleSection = timeBlockValues.map(function(hourBlock){
    return `<div class="row time-block"><p class="hour col-md">${hourBlock.hour}</p><textarea class="description col-md-10"  value=${hourBlock.inputValue?hourBlock.inputValue:""}></textarea><button class="btn saveBtn col-md">Save</button></div>`;
})
console.log (scheduleSection)
$(".container").append(scheduleSection)

// Time blocks

// Enter event

// Save button

// Include local storage
