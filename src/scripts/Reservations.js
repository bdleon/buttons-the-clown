import { getReservations } from "./dataAccess.js"








const convertReservationToListElement = (reservation) => {
    return `
    <li class="list>
    ${reservation.parentName}
   
</li>`
}







export const reservations = () =>{
    const reservations = getReservations()

    let html = `
        <ul>
            ${
                reservations.map(convertReservationToListElement).join("")
            }
        </ul>
    `

    return html
}