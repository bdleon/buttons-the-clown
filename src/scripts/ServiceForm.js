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
            <label class="label" for="serviceLength">How many hours</label>
            <input type="number" name="serviceLength" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}