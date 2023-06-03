let sunny = document.querySelector('.sunny')
let rainy = document.querySelector('.rain')
let snow = document.querySelector('.snow')

let sunnyPic = '/src/assets/summer-bg.jpg'
let rainyPic = '/src/assets/rainy-bg.jpg'
let snowPic = '/src/assets/winter-bg.jpg'

let sunnyAudio = new Audio('./src/assets/sounds/summer.mp3')
let rainyAudio = new Audio('./src/assets/sounds/rain.mp3')
let snowAudio = new Audio('./src/assets/sounds/winter.mp3')

let bgImage: HTMLImageElement | null = document.querySelector('.block-bg')
let volumeItem: HTMLInputElement | null = document.querySelector('.volume')

let sunnyIsPlay = false
let rainyIsPlay = false
let snowIsPlay = false


if (volumeItem) {
	volumeItem.onchange = function () {
		if (volumeItem) {
			sunnyAudio.volume = +volumeItem.value / 100
			rainyAudio.volume = +volumeItem.value / 100
			snowAudio.volume = +volumeItem.value / 100
		}
	}
}


function callB1(event: Event): void {
	const target = event.target as Element;
	//console.log("11 " + typeof event.target)
	//if ((typeof event === 'object') && (typeof event.target === 'object') && (event.target)) {

	if (target.classList[1] === 'sunny') {
		bgImage && (bgImage.src = sunnyPic)
		if (sunnyIsPlay) {
			sunnyAudio.pause()
			sunnyIsPlay = !sunnyIsPlay
		}
		else {
			rainyAudio.pause(); rainyIsPlay = false
			snowAudio.pause(); rainyIsPlay = false
			sunnyIsPlay = !sunnyIsPlay
			sunnyAudio.play()
		}
	}
	if (target.classList[1] === 'rain') {
		bgImage && (bgImage.src = rainyPic)
		if (rainyIsPlay) {
			rainyAudio.pause()
			rainyIsPlay = !rainyIsPlay
		}
		else {
			sunnyAudio.pause(); sunnyIsPlay = false
			snowAudio.pause(); snowIsPlay = false
			rainyIsPlay = !rainyIsPlay
			rainyAudio.play()
		}
	}
	if (target.classList[1] === 'snow') {
		bgImage && (bgImage.src = snowPic)
		if (snowIsPlay) {
			snowAudio.pause()
			snowIsPlay = !snowIsPlay
		}
		else {
			sunnyAudio.pause(); sunnyIsPlay = false
			rainyAudio.pause(); rainyIsPlay = false
			snowIsPlay = !snowIsPlay
			snowAudio.play()
		}
	}
	//}
	//else console.log('Проблема с event')
}



sunny && sunny.addEventListener('click', callB1)
rainy && rainy.addEventListener('click', callB1)
snow && snow.addEventListener('click', callB1)