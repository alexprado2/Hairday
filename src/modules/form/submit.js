import dayjs from "dayjs"
import {scheduleNew} from "../../services/schedule-new.js"
import {schedulesDay} from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

//Today to input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

//load the current date
selectedDate.value = inputToday

//defines minimum date as the current date
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    event.preventDefault()
    
    try {
        //retrieves customer name
        const name = clientName.value.trim()

        if (!name){
            return alert("Informe o nome do cliente!")
        }

        //retrieves the selected time
        const hourSelected = document.querySelector(".hour-selected")
        
        if (!hourSelected){
            return alert("Selecione um horário.")
        }

        //recovers only the time
        const [hour] = hourSelected.innerText.split(":")
       
        //insert the time into the date
        const when = dayjs(selectedDate.value).add(hour, "hour")
        
        //generates an ID
        const id = new Date().getTime()
        
        //make the schedule
        await scheduleNew({
            id,
            name,
            when,
        })

        //reload appointments
        await schedulesDay()
        clientName.value = ""
        
    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }
}