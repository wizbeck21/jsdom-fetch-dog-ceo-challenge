console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all" 

const ul = document.createElement('ul')
const li = document.createElement('li')

document.addEventListener("DOMContentLoaded", (e) => {
  fetchImgs()
})

function fetchImgs() {
  fetch(imgUrl)
  .then(r => r.json())
  .then(data => addImgs(data.message))
  let div = document.getElementById('dog-image-container')
  div.appendChild(ul)
}

function addImgs(dogs) {
  dogs.forEach(d => {
    ul.innerHTML += `<img src=${d}>`
  })
}

function fetchBreeds() {
  fetch(breedUrl)
  .then(r => r.json())
  .then(data => addBreeds(data.message))
  let ulb = document.getElementById('dog-breeds')
}

function addBreeds(breeds) {
breeds.forEach(b => {
    ulb.innerHTML += `<li>${b}</li>`
  })
}