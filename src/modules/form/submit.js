import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

//Today to input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//load the current date
selectedDate.value = inputToday

//defines minimum date as the current date
selectedDate.min = inputToday

form.onsubmit = (event) => {
    event.preventDefault()
    
}