import { deleteReservation, getReservations } from "./dataAccess.js"
import { getClowns } from "./dataAccess.js"



const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deleteReservation(parseInt(reservationId))
    }
})





const convertReservationToListElement = (reservation) => {
    const clowns = getClowns()
    let foundClown = clowns.filter(
        (clown) => {
            return clown
        }
    )
    
   
    return `
    <li class="list">
    <select name="clowns"><option value="${foundClown.id}">${foundClown.name}</option></select>
    Parent ${reservation.parentName} and Child ${reservation.childName} want an event on
    ${reservation.date} for ${reservation.length} hours
     <button class="reservation__delete"
    id="reservation--${reservation.id}">Deny</button>
   
    </li>
`
}







export const reservations = () => {
    const reservations = getReservations()
    const clowns = getClowns()
    console.log(clowns)


    let html = `
        <ul>
            
            ${reservations.map(convertReservationToListElement).join("")}
        </ul>
    `

    return html
}