document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById("start-button")
    const startContainer = document.getElementById("start-container")
    const gameContainer = document.getElementById("game-container")
    const nameField = document.getElementById("name-field")

    // Klick-Handler für Start-Button    
    startButton.addEventListener('click', function() {
        if(nameField.value === "") {
            alert("Bitte gib einen Namen ein.")
        } else {
            startContainer.style.display = "none"
            gameContainer.style.display = "flex"
        }
        
    })
})