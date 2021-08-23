import { fetchClowns, fetchReservations } from "./dataAccess.js"
import { buttonsTheClown } from "./ButtonsTheClown.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchClowns().then
    fetchReservations().then(
        () =>{
            mainContainer.innerHTML = buttonsTheClown()
        }
    )
}

render()

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)