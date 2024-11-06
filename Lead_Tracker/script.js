const inputButton = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("saveTab-btn")
const leadsFromStorage = JSON.parse(window.localStorage.getItem("myLeads"))
//when we retrieve from the local storage, its automatic a string, so we need to use JSON.parse to turn it back into an array
var myLeads = []

if(leadsFromStorage){
    myLeads = leadsFromStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        window.localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads){
    let listItem  = ""
    for(let i = 0; i < leads.length; i++){
        listItem += `
        <li>
            <a target='_blank' href="${leads[i]}">
                ${leads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItem
}

deleteBtn.addEventListener("dblclick", function(){
    window.localStorage.clear()
    myLeads=[]
    render(myLeads)
})


inputButton.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    window.localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})


