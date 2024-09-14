let heading = document.querySelector("p");
let images = document.querySelector("#images");

// console.log(images);
let i = 0;
let array = ["Images/img1.webp", "Images/img2.webp", "Images/img3.jpeg"];

setInterval(function () {
    // heading.textContent = "Hello Preeti";
    i++;
    if (i > array.length-1) i = 0;  //value of i greater than i's length so that carouseling started in i=0
    images.setAttribute("src", array[i]);   //setAtributes take 2 argument 
}, 2000);

console.log(array[i])    //

function randomColor(){
    const colors=["yellow","aqua","pink","lightgreen"]
    return colors[Math.floor(Math.random()*colors.length)];
}
// setInterval((){
//     i++;
//     if(i>colors.length) i=0;
//     colors.setAttribute()
// })

document.body.style.backgroundColor = randomColor();