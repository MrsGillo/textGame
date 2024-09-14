document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById("start-button")
    const startContainer = document.getElementById("start-container")
    const gameContainer = document.getElementById("game-container")
    const nameField = document.getElementById("name-field")
    const textElement = document.getElementById('text')
    const optionButtonsElement = document.getElementById('options-buttons')
    const imageElement = document.getElementById('image')
    let playerName = ""

    // Klick-Handler für Start-Button    
    startButton.addEventListener('click', function() {
        if(nameField.value === "") {
            alert("Bitte gib einen Namen ein.")
        } else {
            startContainer.style.display = "none"
            gameContainer.style.display = "flex"
            playerName = nameField.value
            startGame()
        }
    })

    // Definition des Szenen-Arrays
    let scenes = []

    // erste Funktion zum Starten des Spiels
    const startGame = () => {
        console.log("Spiel gestartet")
        fillSceneData()
        showSceneContent(1)
    }

    // diese Funktion gibt den Inhalt der Szene aus
    const showSceneContent = (sceneID) => {
        console.log("Zeige den Inhalt der Szene.")
        let sceneContent = {}

        scenes.forEach(scene => {
            if (sceneID === scene.id) {
                sceneContent = scene   
            }  
        })

        textElement.innerText = sceneContent.sceneDescription
        imageElement.src = sceneContent.image

        while(optionButtonsElement.firstElementChild) {
            optionButtonsElement.removeChild(optionButtonsElement.firstElementChild)
        }

        sceneContent.options.forEach(option => {
            
            const newButton = document.createElement('button')

            newButton.innerText = option.optionText
            newButton.classList.add('btn')
            newButton.addEventListener('click', () => selectOption(option))

            optionButtonsElement.appendChild(newButton)
        })
    }

    // diese Funktion verarbeitet die Auswahl der nächsten Option
    const selectOption = (option) => {
        showSceneContent(option.nextScene)
    }

    // diese Funktion enthält den Inhalt der Szene
    const fillSceneData = () => {
        scenes = [
            {
                id: 1,
                sceneDescription: "Hoi " + playerName + ", du erwachst in einem verträumten Wald, riechst die Blumen und hörst die Vögel zwitschern.",
                image: "img/image01.jpg",
                options: [
                    {
                        optionText: "Du geniesst den Moment, schliesst deine Augen wieder und schlummerst weiter.",
                        nextScene: 1 
                    },
                    {
                        optionText: "Du stehst auf, streckst dich einmal durch und gehst Richtung Süden.",
                        nextScene: 2
                    },
                ]
            },           
            {
                id: 2,
                sceneDescription: "Du kommst auf deinem Weg an eine Verzweigung.",
                image: "img/image02.jpg",
                options: [
                    {
                        optionText: "Du gehst den linken Pfad entlang.",
                        nextScene:3
                    },
                    {
                        optionText: "Du gehst den rechten Pfad entlang.",
                        nextScene: 4
                    }
                ]
            }
        ]
        console.log("Szeneninhalt gefüllt.")
    }

    









})