import dayjs from "dayjs";

//select sections
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({dailySchedules}){
    try{
        //clear the list
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        //renders schedules by period
        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")
            const time = document.createElement("strong")
            const name = document.createElement("span")

        //add the schedule id
            item.setAttribute("data-id", schedule.id)

            time.textContent = dayjs(schedule.when).format("HH:mm")
            name.textContent = schedule.name

        //create the cancel icon
            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")

        //add time and name to item
            item.append(time, name, cancelIcon)

        //only get the time
            const hour = dayjs(schedule.when).hour()

        //renders in the correct section according to the time
            if(hour <=12){
                periodMorning.appendChild(item)
            } else if (hour >12 && hour <= 18) {
                periodAfternoon.appendChild(item)
            } else {
                periodNight.appendChild(item)
            }            
        })
    } catch (error) {
        alert("Não foi possivel exibir os agendamentos.")
        console.log(error)
    }
} 