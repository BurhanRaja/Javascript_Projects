// Initializing an empty array
let myLeads = []

// Fetching all the ids from HTMl
const saveBtn = document.getElementById("save-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const storage = JSON.parse(localStorage.getItem("myLeads"))

// Displaying the leads on the screen
function render(array) {
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

// Checking if localStorage has leads
if (storage) {
    myLeads = storage
    render(myLeads)
}

// When saveBtn is clicked
saveBtn.addEventListener("click", () => {
    
    // Pushing the value from input element to array
    myLeads.push(inputEl.value)
    
    // Emptying the input bar to input new leads
    inputEl.value = ''
    
    // Using the localstorage to save the data (in built in chrome) and also converting the myLeads to string
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    // Rendering the leads
    render(myLeads)
})

// Saving Tabs url from tab button
tabBtn.addEventListener("click", () => {
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})


// Delete button to delete the leads from localstorage, DOM and myLeads
deleteBtn.addEventListener("dblclick", ()=> {
    myLeads = []
    localStorage.clear()
    render(myLeads)
})

