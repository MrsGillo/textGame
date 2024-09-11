document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById("start-button")
    const startContainer = document.getElementById("start-container")
    const gameContainer = document.getElementById("game-container")
    const nameField = document.getElementById("name-field")
    const textElement = document.getElementById('text')
    const optionButtonsElement = document.getElementById('option-buttons')
    const imageElement = document.getElementById('image')

    // Klick-Handler für Start-Button    
    startButton.addEventListener('click', function() {
        if(nameField.value === "") {
            alert("Bitte gib einen Namen ein.")
        } else {
            startContainer.style.display = "none"
            gameContainer.style.display = "flex"
        }
    })

    // Definition des Szenen-Arrays
    let scenes = []

    // erste Funktion zum Starten des Spiels
    const startGame = () => {
        console.log("Spiel gestartet")
    }

    // diese Funktion gibt den Inhalt der Szene aus
    const showSceneContent = (sceneID) => {

    }

    // diese Funktion verarbeitet die Auswahl der nächsten Option
    const selectOption = (option) => {

    }

    // diese Funktion enthält den Inhalt der Szene
    const fillSceneData = () => {
        scenes = [
            {
                id: 1,
                text: "Scene Text 01"
            }
        ]
    }









})