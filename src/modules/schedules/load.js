import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {hoursLoad} from "../form/hours-load.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    //get the input date
    const date = selectedDate.value

    //search the api for appointments
    const dailySchedules = await scheduleFetchByDay({date})
    console.log(dailySchedules)
    //available hours
    hoursLoad({date})

    
    //available times
}