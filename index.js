let imsges = document.querySelector("#images");
let back = document.querySelector(".back");
let next = document.querySelector(".next");

let i = 0;
let text = ["1", "2", "3", "4", "5", "6", "7"]
let array = ["Images/Taj-Mahal-India.jpg", "Images/Christ-the-Redeemer-Brazil.jpg", "Images/Colosseum-Rome.jpg", "Images/EI-Castillo-Maxico.png", "Images/Machu-Picchu-Peru.jpeg", "Images/petra-Jordan.jpg", "Images/Wall-of-China.png"];
// console.log(array[2])

function randomColor() {
    let colors = ["yellow", "pink", "aqua", "lightgreen", "orange","wheat"]
    return colors[Math.floor(Math.random() * colors.length)];

}

next.addEventListener("click", () => {
    // console.log("preeti")
    i++;
    if (i >= array.length - 1) i = 0;
    images.setAttribute("src", array[i]);
    images.setAttribute("alt", text[i]);
    console.log(images)
    document.body.style.backgroundColor = randomColor();
    
})

back.addEventListener("click", () => {
    // console.log("Kumari")
    i--;
    if (i < 0) i = array.length - 1;
    images.setAttribute("src", array[i]);
    images.setAttribute("alt", text[i]);
    console.log(images)
    document.body.style.backgroundColor = randomColor();
    

})

