const dogsURL = 'http://localhost:3000/dogs'
const tableContainer = document.getElementById('table-body')

//puts content on the DOM when its loaded
document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
})


function fetchDogs() {
    fetch(dogsURL).then(resp => resp.json()).then(dogs => {
        dogs.forEach(dog => {
            console.log(tableRowMaker(dog))
            tableContainer.append(tableRowMaker(dog))
        })
    })
}


function tableRowMaker(dog) {
    const tr = document.createElement('tr')

    const tdName = document.createElement('td')
    tdName.textContent = dog.name
    const tdBreed = document.createElement('td')
    tdBreed.textContent = dog.breed
    const tdSex = document.createElement('td')
    tdSex.textContent = dog.sex
    const tdButton = document.createElement('button')
    const button = document.createElement('button')
    button.textContent = "Edit"

    //button.textContent = document.createElement('button')
    tdButton.append(button)

    //button event listener evoked, listen for a click, and pass in a function
   // use anonymous function to wrap around our button click function so we can pass the parameter we want to
    button.addEventListener('click', () => buttonClick(dog))

    tr.append(tdName, tdBreed, tdSex, tdButton)


    return tr
}
function buttonClick(dog) {
    console.log(dog)
    const form = document.getElementById('dog-form')

    form.name.value = dog.name
    form.breed.value = dog.breed
    form.sex.value = dog.sex
}


