let imsges = document.querySelector("#images");
let back = document.querySelector(".back");
let next = document.querySelector(".next");

let i = 0;
let text = ["1", "2", "3", "4", "5", "6",]
let array = ["Images/img1.webp", "Images/img2.webp", "Images/flower1.jpeg", "Images/flower2.jpg", "Images/image.avif", "Images/image3.jpeg"];
// console.log(array[2])

next.addEventListener("click", () => {
    // console.log("preeti")
    i++;
    if (i >= array.length-1) i = 0;
    images.setAttribute("src", array[i]);
    images.setAttribute("alt", text[i]);
    console.log(images)
})

back.addEventListener("click", () => {
    // console.log("Kumari")
    i--;
    if (i < 0) i = array.length-1;
    images.setAttribute("src", array[i]);
    images.setAttribute("alt", text[i]);
    console.log(images)

})

function randomColor(){
    let colors = ["yellow","pink","aqua","lightgreen","orange"]
    // for(leti=0; i<str.length; i++)
        return colors[Math.floor(Math.random()*colors.length)];
    
}

document.addEventListener("click",()=>{
    document.body.style.backgroundColor = randomColor();
})