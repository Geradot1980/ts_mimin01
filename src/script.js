var sunny = document.querySelector('.sunny');
var rainy = document.querySelector('.rain');
var snow = document.querySelector('.snow');
var sunnyPic = '/src/assets/summer-bg.jpg';
var rainyPic = '/src/assets/rainy-bg.jpg';
var snowPic = '/src/assets/winter-bg.jpg';
var sunnyAudio = new Audio('./src/assets/sounds/summer.mp3');
var rainyAudio = new Audio('./src/assets/sounds/rain.mp3');
var snowAudio = new Audio('./src/assets/sounds/winter.mp3');
var bgImage = document.querySelector('.block-bg');
var volumeItem = document.querySelector('.volume');
var sunnyIsPlay = false;
var rainyIsPlay = false;
var snowIsPlay = false;
if (volumeItem) {
    volumeItem.onchange = function () {
        if (volumeItem) {
            sunnyAudio.volume = +volumeItem.value / 100;
            rainyAudio.volume = +volumeItem.value / 100;
            snowAudio.volume = +volumeItem.value / 100;
        }
    };
}
function callB1(event) {
    var target = event.target;
    //console.log("11 " + typeof event.target)
    //if ((typeof event === 'object') && (typeof event.target === 'object') && (event.target)) {
    if (target.classList[1] === 'sunny') {
        bgImage && (bgImage.src = sunnyPic);
        if (sunnyIsPlay) {
            sunnyAudio.pause();
            sunnyIsPlay = !sunnyIsPlay;
        }
        else {
            rainyAudio.pause();
            rainyIsPlay = false;
            snowAudio.pause();
            rainyIsPlay = false;
            sunnyIsPlay = !sunnyIsPlay;
            sunnyAudio.play();
        }
    }
    if (target.classList[1] === 'rain') {
        bgImage && (bgImage.src = rainyPic);
        if (rainyIsPlay) {
            rainyAudio.pause();
            rainyIsPlay = !rainyIsPlay;
        }
        else {
            sunnyAudio.pause();
            sunnyIsPlay = false;
            snowAudio.pause();
            snowIsPlay = false;
            rainyIsPlay = !rainyIsPlay;
            rainyAudio.play();
        }
    }
    if (target.classList[1] === 'snow') {
        bgImage && (bgImage.src = snowPic);
        if (snowIsPlay) {
            snowAudio.pause();
            snowIsPlay = !snowIsPlay;
        }
        else {
            sunnyAudio.pause();
            sunnyIsPlay = false;
            rainyAudio.pause();
            rainyIsPlay = false;
            snowIsPlay = !snowIsPlay;
            snowAudio.play();
        }
    }
    //}
    //else console.log('Проблема с event')
}
sunny && sunny.addEventListener('click', callB1);
rainy && rainy.addEventListener('click', callB1);
snow && snow.addEventListener('click', callB1);
