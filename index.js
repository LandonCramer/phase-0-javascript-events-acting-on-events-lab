const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";


function moveDodgerLeft(event) {
    console.log(event);
    const leftNumber = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumber, 10);

    if(left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
function moveDodgerRight(event) {
    console.log(event);
    const leftNumber = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumber, 10);
    
    if(left < 360) {
        dodger.style.left = `${left + 1}px`;
    }
}
document.addEventListener('keydown', function(event) {
    if(event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
})