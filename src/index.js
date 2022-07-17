console.log('%c HI', 'color: firebrick')
let breeds = []
function getBreeds() {
    const imgURL = "https://dog.ceo/api/breeds/image/random/4"
     return fetch(imgURL).then(response => response.json()).then(data => {
        const dogImageContainer = document.getElementById("dog-image-container")
        data.message.forEach(url => {
            const img = document.createElement('img')
            img.src  = url
            dogImageContainer.append(img)
        })

            
        });
        

    
     }

function dogBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl).then(response => response.json()).then(data => {
            breeds = Object.keys(data.message) // dont want the actual array, just want the corresponding key values (see console.log(data.message)) in this step, you take the keys and put them into an array that then can be iterated over
            addBreedstoDOM(breeds)

        })
    }
function addBreedstoDOM(breeds) {
        const ul = document.querySelector('#dog-breeds')
        breeds.map(breed => { 
            const li = document.createElement('li')
            li.textContent = breed
            ul.append(li)
        })
    
}
document.addEventListener('click', e => {
    if(e.target.matches('li')){
        e.target.style.color = 'blue'
    }

})

document.addEventListener('change', (e) => {
    if(e.target.matches('#breed-dropdown')) {
        const ul = document.querySelector('#dog-breeds')
        ul.innerHTML = ''
         const filteredBreeds = breeds.filter(breed => breed[0] === e.target.value)
        addBreedstoDOM(filteredBreeds)
    }
})


getBreeds()
dogBreeds()
