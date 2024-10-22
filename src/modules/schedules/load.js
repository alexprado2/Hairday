import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {hoursLoad} from "../form/hours-load.js"
import {schedulesShow} from "../schedules/show.js"

const selectedDate = document.getElementById("date")

export async function schedulesDay() {
    //get the input date
    const date = selectedDate.value

    //search the api for appointments
    const dailySchedules = await scheduleFetchByDay({date})

    //displays schedules
    schedulesShow({dailySchedules})
    
    //available hours
    hoursLoad({date, dailySchedules})

    
    //available times
}