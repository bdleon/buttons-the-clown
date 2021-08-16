const applicationState = {
    reservations: [
        
    ]
}


const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")
export const fetchReservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (serviceReservations) => {
                // Store the external state in application state
                applicationState.reservations = serviceReservations
            }
        )
}

export const getReservations = () =>{
    return applicationState.reservations.map(reservation => ({...reservation}))
}
export const sendReservation = (userServiceReservation) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceReservation)
    }


    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))

        })
}