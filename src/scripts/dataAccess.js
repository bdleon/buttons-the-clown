const applicationState = {
    reservations: [
        
    ],
    clowns: [

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
/////this will fetch clown from database.json
export const fetchClowns = () => {
    return fetch(`${API}/clowns`)
        .then(response => response.json())
        .then(
            (serviceClown) => {
                // Store the external state in application state
                applicationState.clowns = serviceClown
            }
        )
}

export const getClowns =() =>{
    return applicationState.clowns.map(clown =>({...clown}))
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

export const deleteReservation = (id) =>{
    return fetch(`${API}/reservations/${id}`, {method: "DELETE"})
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        }
    )
}