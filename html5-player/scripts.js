/* Get our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */

function togglePlay() {
	video.paused ? video.play() : video.pause();
	toggle.textContent === "►" ? toggle.textContent = "||" : toggle.textContent = "►";
}

function skip() {
	video.currentTime += parseInt(this.dataset.skip);
}

function updatePlaybackProperties() {
	const propertyName = this.name;
	if (propertyName === "volume") {
		video.volume = this.value;
	} else {
		video.playbackRate = this.value;
	}
}

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', updatePlaybackProperties))
