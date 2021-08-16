import { sendReservation } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='serviceParentName']").value
        const userChildName = document.querySelector("input[name='serviceChildName']").value
        const userNumberOfChildren = document.querySelector("input[name='serviceNumberOfChildren']").value
        const userAddress= document.querySelector("input[name='serviceAddress']").value
        const userDate= document.querySelector("input[name='serviceDate']").value
        const userLength= document.querySelector("input[name='serviceLength']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            childName: userChildName,
            numberOfChildren: userNumberOfChildren,
            address: userAddress,
            date: userDate,
            length: userLength


        }

        // Send the data to the API for permanent storage
        sendReservation(dataToSendToAPI)
    }
})



export const serviceForm = () =>{
    let html = `
        <div class="field">
            <label class="label" for="serviceParentName">Parent Name</label>
            <input type="text" name="serviceParentName" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceChildName">Child's Name</label>
            <input type="text" name="serviceChildName" class="input"  />
        </div>
        <div class="field">
            <label class="label" for="serviceNumberOfChildren">Number of Children Attending</label>
            <input type="number" name="serviceNumberOfChildren" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date</label>
            <input type="date" name="serviceDate" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceLength">How many hours for event</label>
            <input type="number" name="serviceLength" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}