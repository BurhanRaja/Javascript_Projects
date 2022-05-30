// Fetching all the ids from HTMl
const saveBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

// Initializing an empty array
let myLeads = []

// Displaying the leads on the screen
function renderLead(array = []) {
    let listitem = ""
    for (let i = 0; i < array.length; i++) {
        listitem += `
        <li>
            <a target='_blank' href='${array[i]}'>
                ${array[i]}
            </a>
        </li>
        `
    }

    // Rendering the list in ul element
    ulEl.innerHTML = listitem
}

// When saveBtn is clicked
saveBtn.addEventListener("click", () => {

    // Pushing the value from input element to array
    myLeads.push(inputEl.value)

    // Emptying the input bar to input new leads
    inputEl.value = ''

    // Using the localstorage to save the data (in built in chrome) and also converting the myLeads to string
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    // Converting myLeads from string to array and displaying the leads
    const storage = JSON.parse(localStorage.getItem("myLeads"))
    if (storage) {
        myLeads = storage
        renderLead(myLeads)
    }
})

// Delete button to delete the leads from localstorage, DOM and myLeads
function deleteLeads() {
    myLeads = []
    localStorage.clear()
    renderLead(myLeads)
}
