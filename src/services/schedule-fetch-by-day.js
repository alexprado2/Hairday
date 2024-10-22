import {apiConfig} from "./api-config.js"
import dayjs from "dayjs"

export async function scheduleFetchByDay({date}) {
    try {
        //makes the request
        const response = await fetch(`${apiConfig.baseURL}/schedules`)

        //convert to json
        const data = await response.json()

        //filter appointments by day

        const dailySchedules = data.filter((schedule) =>
             dayjs(date).isSame(schedule.when, "day"))

        return dailySchedules
        
    } catch (error) {
        console.log(error)
        alert("Não foi possivel buscar os agendamentos do dia selecionado.")
    }
}