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

themaFunktionen()

const themaArray = () => {
    // Coder aus der Anleitung
    console.log("Ich komme aus dem Thema arrays")







}

themaArray()