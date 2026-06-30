let images = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg"
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
