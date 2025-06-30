
function populate(size){
    const board = document.querySelector(".container")
    const squares = board.querySelectorAll("div") //this is getting all the divs from the board 
    


    squares.forEach(element => (element.remove()));

    board.style.display ="grid"
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let amount = size * size


    for(let i = 0; i < amount; i++){ 
        let square = document.createElement("div")
        square.addEventListener("mouseover", ()=>{
            square.style.background = getRandomHexColor()
        })
        // square.style.border = "1px solid black";
        board.appendChild(square)
    }
}

// populate(16);





function createSize(input){

    if(input < 1 || input > 100){
        console.log("error")
    }else{
        populate(input)
    }

}


document.getElementById("create-sizes").addEventListener("click",
    function(){
        const user_input = prompt("Enter size ")

        createSize(user_input)

    }
)

//create a random color

function getRandomHexColor() {
  // Generate a random number between 0 and 16777215 (which is 0xFFFFFF in decimal)
  const randomNum = Math.floor(Math.random() * 16777215);

  // Convert the number to a hexadecimal string
  let hexColor = randomNum.toString(16);

  // Pad the string with leading zeros if necessary to ensure 6 characters
  // For example, if hexColor is "abc", it becomes "000abc"
  hexColor = '#' + hexColor.padStart(6, '0');

  return hexColor;
}