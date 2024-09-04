document.addEventListener('DOMContentLoaded',function() {
    
    const startButton = document.getElementById("start-button")
    console.log(startButton)

    startButton.addEventListener('click', function() {
      let name = prompt("Gib deinen Namen ein.")
      alert("Hi " + name)
    })



})



