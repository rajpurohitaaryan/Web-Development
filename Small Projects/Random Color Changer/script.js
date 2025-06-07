 let boxes = document.getElementsByClassName("box");
 let mainColors = ["red", "blue", "green", "yellow", "orange", "purple"]
 let rand= Math.random()
console.log(rand)
 for (let box of boxes){
    let color= mainColors[Math.floor(rand *mainColors.length)]    
    box.style.backgroundColor = color;
 }