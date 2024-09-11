document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById("start-button")
    const startContainer = document.getElementById("start-container")
    const gameContainer = document.getElementById("game-container")

    // Klick-Handler für Start-Button    
    startButton.addEventListener('click', function() {
        startContainer.style.display = "none"
        gameContainer.style.display = "flex"
    })
})