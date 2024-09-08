document.addEventListener('DOMContentLoaded',function() {
    
   const fillListButton = document.getElementById("fill-list")
   const addButton = document.getElementById("add")
   const removeButton = document.getElementById("remove")
   let container = document.getElementById("second-container")

   addButton.disabled = true
   removeButton.disabled = true

    const fruitInBasket = [
        "Apple",
        "Cherry",
        "Banana",
        "Strawberry",
        "Egg"
    ]

    const allFruits = [
        "Apple",
        "Cheery",
        "Banana",
        "Blackberry",
        "Citron",
        "Coconut",
        "Mango",
        "Pear"
    ]

   fillListButton.addEventListener('click', function(){
        fruitInBasket.forEach(fruit => {
            let newChild = document.createElement('div')
            let text = document.createTextNode(fruit)
            newChild.appendChild(text)
            container.appendChild(newChild)
        })
        addButton.disabled = false
        removeButton.disabled = false
        fillListButton.disabled = true
   })

   removeButton.addEventListener('click', function(){
        if (fruitInBasket.length > 1) {
            fruitInBasket.pop()
            container.removeChild(container.lastChild)   
        } else if(fruitInBasket.length === 1) {
            fruitInBasket.pop()
            container.removeChild(container.lastChild) 
            removeButton.disabled = true
        }  
   })

   addButton.addEventListener('click', function(){
        if(fruitInBasket.length === 0) {
            removeButton.disabled = false
        }    
    
        // Zufällige Nummer für das Array
        let min = 0
        let max = allFruits.length
        
        let randomNumber = Math.floor(Math.random() * (max - min) + min)
    
        // Neue Frucht dem Array hinzugefügt
        fruitInBasket.push(allFruits[randomNumber])

        // Frucht als HMTL child anfügen
        let newChild = document.createElement('div')
        let text = document.createTextNode(allFruits[randomNumber])
        newChild.appendChild(text)
        container.appendChild(newChild)  
        
        
   })



})



