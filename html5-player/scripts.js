/* Get our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
progressBar.style.flexBasis = 0;

/* Build out functions */

function togglePlay() {
	video.paused ? video.play() : video.pause();
	toggle.textContent === "►" ? toggle.textContent = "||" : toggle.textContent = "►";
}

function skip() {
	video.currentTime += parseInt(this.dataset.skip);
}

function updatePlaybackProperties() {
	video[this.name] = this.value;
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}
video.addEventListener('timeupdate', handleProgress);

video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', updatePlaybackProperties))
ranges.forEach(range => range.addEventListener('mousemove', updatePlaybackProperties))
function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}
video.addEventListener('timeupdate', handleProgress);