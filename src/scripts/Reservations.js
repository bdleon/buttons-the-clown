import { getReservations } from "./dataAccess.js"
import { getClowns } from "./dataAccess.js"








const convertReservationToListElement = (reservation) => {
    const clowns = getClowns()
    let foundClown = clowns.filter(
        (clown) => {
            return clown
        }
    )
    
   
    return `
    <li class="list">
    <select><option class="input" name="clown" value="${foundClown.id}">${foundClown.name}</option></select>
    Parent ${reservation.parentName} and Child ${reservation.childName} want an event on
    ${reservation.date} for ${reservation.length} hours
     <button class="request__delete"
    id="request--${reservation.id}">Deny</button>
   
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