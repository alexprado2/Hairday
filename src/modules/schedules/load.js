import {hoursLoad} from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export function schedulesDay() {
    //get the input date
    const date = selectedDate.value

    //available hours
    hoursLoad({date})

    //search the api for appointments

    //available times
}