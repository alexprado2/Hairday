import dayjs from "dayjs"
import {openingHours} from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({date, dailySchedules}) {
    //clear the schedule list
    hours.innerHTML = ""
    
    //get the list of all busy times
    const unavailableHours = dailySchedules.map((schedule) => 
        dayjs(schedule.when).format("HH:mm")
    )

    const opening = openingHours.map ((hour) => {
        //recovers only the time
        const [schedulesHour] = hour.split(":")

        //add time to date and check if it is in the past
        const isHourPast = dayjs(date).add(schedulesHour, "hour").isBefore(dayjs())

        const available = !unavailableHours.includes(hour) && !isHourPast
       
        //defines whether the time is available
        return {
            hour,
            available,
        }
    })
    // render the timetable
        opening.forEach(({hour, available}) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if(hour === "9:00"){
            hourHeaderAdd("Manhã")
        }else if (hour === "13:00") {
            hourHeaderAdd("Tarde")
        }else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }
        
        //click event for available times
        hours.append(li)
    })

    hoursClick()
}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}