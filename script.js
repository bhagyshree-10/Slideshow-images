let images = [
    "images/1.jpeg",
    "images/2.jpeg",
    "images/3.jpeg",
    "images/4.jpeg",
    "images/5.jpeg",
    "images/6.jpeg",
    "images/7.jpeg",
    "images/8.jpeg",
    "images/9.jpeg",
    "images/10.jpeg"
];

let index = 0;

let slide = document.getElementById("slide");

let id = null;

function startSlide(){

    if(id !== null){
        return;
    }

    id = setInterval(function(){

        index++;

        if(index == images.length){
            index = 0;
        }

        slide.src = images[index];

    },1000);

}

function stopSlide(){

    clearInterval(id);
    id = null;

}

function resetSlide(){

    clearInterval(id);
    id = null;

    index = 0;

    slide.src = images[index];

}