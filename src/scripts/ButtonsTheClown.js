 import {reservations} from "./Reservations.js"
 import { serviceForm } from "./ServiceForm.js"



export const buttonsTheClown = ()=>{

    return `
        <h1>Button's The Clown</h1>
        <section class="serviceForm">
        ${serviceForm()}
        </section>

        <section class="serviceRequests">
            <h2>Reservation</h2>
            ${reservations()}
           
        </section>
    `
}