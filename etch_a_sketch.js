const gridDivContainer = document.querySelector(".container")
function gridGenerator(nrows, ncols) {
    for (let i = 1; i <= nrows; i ++) {    
        for (let j = 1; j <= ncols; j ++) {
            const gridDiv = document.createElement("div");
            gridDiv.classList.add("grid")
            gridDivContainer.appendChild(gridDiv);
        }
        const linebreak = document.createElement("br");
        gridDivContainer.appendChild(linebreak);
    }
}


gridGenerator(16, 16); 

const gridDivMouse = document.querySelector(".grid");
console.log(gridDivMouse);
gridDivMouse.addEventListener('onmouseenter', function(){
    gridDivMouse.style.backgroundColor = "black";
});
