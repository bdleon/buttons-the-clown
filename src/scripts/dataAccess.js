const API = "http://localhost:8088"

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