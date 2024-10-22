import {schedulesDay} from "../schedules/load.js"
//select date input
const selectedDate = document.getElementById("date")

//reload the timetable list
selectedDate.onchange = () => schedulesDay()