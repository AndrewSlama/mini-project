var thisHour = document.getElementById('');
var isHour = '';
var timeBlo = document.getElementById("time-block");
var currentDay = document.getElementById("today");
var saveBtn = document.querySelectorAll('.saveBtn');
var workingDay = localStorage.getItem("textSave");
alert(typeof workingDay);
var myDay = [
    {
        id: "textArea9",
        text: '',
    },  
    {
        id: "textArea10",
        text: '',
    },  
    {
        id: "textArea11",
        text: '',
    },  
    {
        id: "textArea12",
        text: '',
    },  
    {
        id: "textArea1",
        text: '',
    },  
    {
        id: "textArea2",
        text: '',
    },  
    {
        id: "textArea3",
        text: '',
    },  
    {
        id: "textArea4",
        text: '',
    },  
    {
        id: "textArea5",
        text: '',
    },   
];
// alert(workingDay == null);
// alert(!workingDay);
// if (workingDay === null) {
//     workingDay = myDay;
// }
// alert(JSON.stringify(workingDay));
// function getHeaderDate() {
//     alert(dayjs());
// }
// saveBtn.forEach((btn) => { btn.addEventListener("click", (event) => 
// {   var values = Array.from(document.querySelectorAll('.description'))
//     .map(input => input.value);
//     alert(values);
//     for (var i = 0; i < workingDay.length; i++) {
//         workingDay[i].text = values[i];
//     }
//     alert(workingDay);

//     // localStorage.setItem('textSave', workingDay);
//     });
//  });

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function getHeaderDate() {
    alert(dayjs());
};


$(function () {
     alert(workingDay == null);
    alert(!workingDay);
if (workingDay === null || workingDay === undefined) {
    workingDay = myDay;
} else {
    workingDay = JSON.parse(localStorage.getItem('textSave'));
};
    for (var i = 0; i > workingDay.length; i++) {
        var textArea = document.getElementById(workingDay[i].id);
        textArea.innerText = workingDay[i].text;
    };
    //alert(JSON.stringify(workingDay));


saveBtn.forEach((btn) => { btn.addEventListener("click", (event) => 
{   var values = Array.from(document.querySelectorAll('.description')).map(input => input.value);
    for (var i = 0; i < workingDay.length; i++) {
        workingDay[i].text = values[i];

    }
        alert(JSON.stringify(workingDay));

        localStorage.setItem('textSave', JSON.stringify(workingDay));
    });
 });
    
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  