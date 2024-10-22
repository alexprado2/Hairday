export function hoursClick(){
    const hours = document.querySelectorAll('.hour-available')
   
    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {
            //remove hour-selected class from all (li)
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })
            //adds the hour-selected class to the selected time
            selected.target.classList.add("hour-selected")
        })
    })
}