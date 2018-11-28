/* Get our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */

function togglePlay() {
	if(video.paused) {
		video.play();
	} else {
		video.pause();
	}
}

function skip() {
	console.log("skip pressed!");
	video.currentTime += parseInt(this["dataset"].skip);
}

/* Hook up event listeners */

toggle.addEventListener('mousedown', togglePlay);
skipButtons.addEventListener('mousedown', skip);
