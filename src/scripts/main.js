import { fetchReservations } from "./dataAccess.js"
import { buttonsTheClown } from "./ButtonsTheClown.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchReservations().then(
        () =>{
            mainContainer.innerHTML = buttonsTheClown()
        }
    )
}

render()