// console.log(5===5)
// console.log(5 != 5)
// console.log(5 < 4)
// console.log(5 > 4)
// console.log(5 >= 5)
// console.log(5 <= 5)
// console.log(5===5)

let woodInStorage = 10
const BUILDING_COST = 5

if(woodInStorage >= BUILDING_COST) {
    console.log("Du baust eine Farmerhütte")
} else {
    console.log("Zu wenig Rohstoffe in deinem Kontor")
}

let costOfFood = 200
let costOfRent = 1800
const BUDGET = 2000

if((costOfFood + costOfRent)< BUDGET) {
    console.log("Du bist im Budget")
} else if ((costOfFood + costOfRent) === BUDGET) {
    console.log("Du hast es auf den Punkt getroffen!")
} else {
    console.log("Du hast in diesem Monat zu viel ausgegeben!")
}

let whoOpensTheDoor = "Niffler"
if(whoOpensTheDoor === "Amy" || whoOpensTheDoor === "Gil") {
    console.log("Amy oder Gilby kommt nach Hause")
} else {
    console.log("Heee..., " + whoOpensTheDoor + " wohnt hier nicht!")
}

let person01 = "Niffler"
let person02 = "Joanah"

if(person01 === "Amy" && person02 === "Gil" ) {
    console.log("Amy und Gil kommen zusammen nach Hause.")
} else {
    if(person01 === "Amy" || person02 === "Gil") {
        console.log("Nur einer von beiden kommt nach Hause.")
    } else {
        console.log("Keiner kommt nach Hause, der hier wohnt.")
    }
}

let highScore = 25
let score = 26

if(score > highScore) {
    console.log("Speichere den neuen Highscore in die Datenbank.")
}






