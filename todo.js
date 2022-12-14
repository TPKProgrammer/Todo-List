const inputEl = document.querySelector(".input")
const addBtn = document.getElementById("add-btn")
const  remove = document.querySelector(".remove")
const ulEl = document.getElementById("ul-el")

let myList = []

addBtn.addEventListener('click', function() {
    myList.push(inputEl.value)
    inputEl.value = ""

    renderList()
    
})


function renderList() {
    let listItems = ""

    for (let i = 0; i < myList.length; i++) {
        listItems += "<li>" + myList[i] + "</li>"
    }

    ulEl.style.display = "block"
    remove.style.display = "block"
    ulEl.innerHTML = listItems
}

remove.addEventListener('click', function() {
    window.location.reload()
})