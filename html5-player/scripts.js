/* Get our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fScreen= player.querySelector('.fullscreen');
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

function scrub(e) {
	const playScrub = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = playScrub;
}

function fullscreenMode() {
	console.log('fullscreen engaged!');
	video.webkitRequestFullScreen();
}

fScreen.addEventListener('click', fullscreenMode);
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', updatePlaybackProperties))
ranges.forEach(range => range.addEventListener('mousemove', updatePlaybackProperties))
video.addEventListener('timeupdate', handleProgress);
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);



