const saveBtn = document.getElementById("save-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


// let myLeads = ["www.helloworld.com", "www.examplelead.com", "www.notyourbro.com"]
let myLeads = []

saveBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    renderLead()
})


function renderLead() {
    let listitem = ""
    for (let i = 0; i < myLeads.length; i++) {
        // More Human readable
        // listitem += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
        listitem += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listitem
}