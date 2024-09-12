//DOM Targetting
const currentPlayerEl = document.querySelector(".current-player");
const boxes = document.querySelector(".box");


// Gamae Variables

// gameGrid.addEventListener("click", () => {
//     alert("Hello");
// });

//add event listner of click
for (let i =0; i < boxes.length;i++){
    boxes[i].addEventListner("click", () => {
            alert("Hello");
        });
    }





function handleClick(){
    console.log(currentPlayer);
    swapPlayer();
}

// Add event Listener of click
boxes.array.forEach((el) => {
    el.addEventListner("click", handleClick);    
});




















