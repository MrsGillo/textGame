const themaFunktionen = () => {

    // Code aus der Anleitung
    const taschenrechner = (firstNumber, secondNumber, operator) => {
        if(operator === "add") {
            console.log(firstNumber + secondNumber)
        } else if(operator === "min") {
            console.log(firstNumber - secondNumber)
        } else if(operator === "multi") {
            console.log(firstNumber*secondNumber)
        } else if(operator === "div") {
            console.log(firstNumber/secondNumber)
        } else{
            console.log("Gib einen gültigen Operator mit.")
        }
    }
    
    taschenrechner(2, 5, "add")
    taschenrechner(2, 5, "min")
    taschenrechner(2, 5, "multi")
    taschenrechner(2, 5, "div")
    taschenrechner(2,5)
}


const themaArray = () => {
    // Coder aus der Anleitung
    console.log("Ich komme aus dem Thema arrays")
    let fruits = ["Banana", "Apple", "Birne", "Honigmelone"]

    fruits.forEach ((fruit, index) => {
        console.log(index)
        console.log(fruit)
    })
}


const themaObject = () => {
    console.log("Ich bin das Object-Thema ")

    const car = {
        brand: "bmw",
        color: "red",
        year: 2012,
        secondHand: true,
        honk: function() {
            console.log("My " + this.brand + " makes whoop whoop" )
        },
        owners: [
            {
                name: "Gilby", 
                sex: "male"
            },
            {
                name: "Amy",
                sex: "female"
            },
            {
                name: "Hippo",
                sex: "animal"
            }
        ]
    }
    console.log(car)

    console.log(car.owners)

    car.owners.forEach(owner => {
        if(owner.sex === "male") {
            console.log(owner.name + " ist der Besitzer des Autos.")
        }
        else if(owner.sex === "female") {
            console.log(owner.name + " ist die Besitzerin des Autos")
        }
        else if(owner.sex === "animal") {
            console.log(owner.name + " verdreckt hier nur die Sitze.")
        }
        else{
            console.log(owner.name + " hat gar kein Auto.")
        }
    
    })


}


themaObject()

