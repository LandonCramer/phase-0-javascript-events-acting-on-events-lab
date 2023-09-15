// const dodger = document.getElementById("dodger");

// dodger.style.backgroundColor = "yellow";


// function moveDodgerLeft(event) {
//     console.log(event);
//     const leftNumber = dodger.style.left.replace("px", "");
//     const left = parseInt(leftNumber, 10);

//     if(left > 0) {
//         dodger.style.left = `${left - 1}px`;
//     }
// }
// function moveDodgerRight(event) {
//     console.log(event);
//     const rightNumber = dodger.style.left.replace("px", "");
//     const right = parseInt(rightNumber, 10);
    
//     if(right < 360) {
//         dodger.style.left = `${right + 1}px`;
//     }
// }
// document.addEventListener('keydown', function(event) {
//     if(event.key === "ArrowLeft") {
//         moveDodgerLeft();
//     } else if (event.key === "ArrowRight") {
//         moveDodgerRight();
//     }
// })


let dodger = document.getElementById("dodger");

dodger.style.backgroundColor= "blue";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() { 
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);

    if(right < 360) {
        dodger.style.left = `${right + 1}px`;
    }
}

document.addEventListener('keydown', function(event) {
      if(event.key === "ArrowLeft") {
          moveDodgerLeft();
      } else if (event.key === "ArrowRight") {
          moveDodgerRight();
      }
  })
  
