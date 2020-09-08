function goo(event){
    event.preventDefault();
    let bloon =document.createElement("img")
    bloon.setAttribute("src","imag/bal"+Math.round(Math.random()*2)+".png")  
    bloon.setAttribute("widht","200")
    let myimg=document.getElementById("box")
    myimg.appendChild(bloon)

}
