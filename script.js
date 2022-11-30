const images=[
    {
        img :"MYPIC.jpg"
    },{
        img:"MYPICC.jpg"
    },{
        img:"MYPP.jpg"
    },{
        img:"MYYYY.jpg"
    }                                                                                                     
    
]


var I = 0;
img = document.querySelector(".img");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const radio4 = document.getElementById("radio4");
const radiobutton = documnet.querySelectorAll(".radio-btn");
var type;

function next(){
    setInterval(false)
    I = (I+1)%(images.length)
    img.src = images[I].img
    radio1(I)
    setInterval(true)
}

function prev(){
    setInterval(false)
    I = (I-1)%(images.length)
    if(I<0){
        I=3
    }
    radio1(I)
    img.src = images[I].img
    setInterval(true)
}

function interval(e){
    if(e){
        type=setInterval(()=>{
            img.src=images[I].img
            radio1(I);
            I = (I+1)%(images.length);

        },4000)
    }
    if(!e){
        clearInterval(type)
    }
}

window.addEventListener("DOMContentLoaded", ()=>{
    interval(true)
})

function radio(e){
    if(e==0){
        radio3.style.backgroundColor="white"
        radio2.style.backgroundColor="white"
        radio4.style.backgroundColor="white"
        radio1.style.backgroundColor="red"
    }

    else if(e==1){
        radio3.style.backgroundColor="white"
        radio1.style.backgroundColor="white"
        radio4.style.backgroundColor="white"
        radio2.style.backgroundColor="red"
    }

    else if(e==2){
        radio2.style.backgroundColor="white"
        radio1.style.backgroundColor="white"
        radio4.style.backgroundColor="white"
        radio3.style.backgroundColor="red"
    }

    else if(e==3){
        radio3.style.backgroundColor="white"
        radio2.style.backgroundColor="white"
        radio1.style.backgroundColor="white"
        radio4.style.backgroundColor="red"
    }
}

function imageshow(e){
    interval(false)
    img.src= images[e].img
    radio(e)
    interval(true)
}