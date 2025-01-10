let btn = document.querySelector("button");
let div = document.querySelector("div");
let h1 = document.querySelector("h1");
btn.addEventListener("click", function() {
    let arr = colorGenerator();
    div.style.backgroundColor = `rgb(${arr[0]},${arr[1]},${arr[2]})`;
    h1.innerText = `rgb(${arr[0]},${arr[1]},${arr[2]})`;
});



function colorGenerator() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let arr = [red, green, blue];
    return arr;
}