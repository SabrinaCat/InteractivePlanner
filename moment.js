var time = document.getElementById('currentDay');
var event = document.getElementById('event');
var notes = document.getElementById('notes');
var saveBtn = document.getElementById('saveBtn');
var UserName = document.getElementById('user')
const currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")

moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

$( document ).ready(function() {
    console.log( "ready!" );
    console.log(currentTime)
    time.innerHTML = currentTime;
});