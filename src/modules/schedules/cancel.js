import {scheduleCancel} from "../../services/schedule-cancel.js"
import {schedulesDay} from "./load.js"

const periods = document.querySelectorAll(".period")

//generates click event for each list
periods.forEach((period) => {
    //captures the click event in the list
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")){
            //get the li of the clicked element
            const item = event.target.closest("li")
            //get the schedule id to remove
            const {id} = item.dataset
        
            //confirms if the id was selected
            if(id){
                //confirms if the user wants to remove
                const isConfirm = confirm("Realmente deseja cancelar o agendamento?")

                if (isConfirm) {
                    //makes a cancellation request
                   await scheduleCancel ({id})
                   schedulesDay()
                }
            }
        }
    })
})