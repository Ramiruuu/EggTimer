const eggType = document.getElementById('egg-type');
const startResetBtn = document.getElementById('start-reset');
const timeDisplay = document.querySelector('.time');
const progressCircle = document.querySelector('.progress');
const timerRing = document.querySelector('.timer-ring');
const timerContainer = document.querySelector('.timer-container');

let duration = parseInt(eggType.value, 10);
let remaining = duration;
let timer = null;
let running = false;

// SVG circle setup
const radius = 60;
const circumference = 2 * Math.PI * radius;
progressCircle.style.strokeDasharray = circumference;
progressCircle.style.strokeDashoffset = 0;

// Format seconds to MM:SS
function formatTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, '0');
    const s = (sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

// Update progress ring
function setProgress(percent) {
    const offset = circumference * (1 - percent);
    progressCircle.style.strokeDashoffset = offset;
}

// Start timer
function startTimer() {
    running = true;
    startResetBtn.textContent = 'Reset';
    eggType.disabled = true;
    timer = setInterval(() => {
        remaining--;
        timeDisplay.textContent = formatTime(remaining);
        setProgress(remaining / duration);
        if (remaining <= 0) {
            clearInterval(timer);
            timer = null;
            running = false;
            finishTimer();
        }
    }, 1000);
}

// Reset timer
function resetTimer() {
    if (timer) clearInterval(timer);
    running = false;
    remaining = duration;
    timeDisplay.textContent = formatTime(duration);
    setProgress(1);
    startResetBtn.textContent = 'Start';
    eggType.disabled = false;
    timerContainer.classList.remove('flash');
}

// Timer finished
function finishTimer() {
    timeDisplay.textContent = '00:00';
    setProgress(0);
    startResetBtn.textContent = 'Reset';
    eggType.disabled = false;
    flashEffect();
    beep();
}

// Flash animation
function flashEffect() {
    timerContainer.classList.add('flash');
    setTimeout(() => {
        timerContainer.classList.remove('flash');
    }, 700);
}

// Beep sound
function beep() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = 440;
        gain.gain.value = 0.2;
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        setTimeout(() => {
            osc.stop();
            ctx.close();
        }, 300);
    } catch (e) {
        // Audio not supported
    }
}

// Event listeners
startResetBtn.addEventListener('click', () => {
    if (!running) {
        startTimer();
    } else {
        resetTimer();
    }
});

eggType.addEventListener('change', () => {
    duration = parseInt(eggType.value, 10);
    resetTimer();
});

// Initial state
resetTimer();

// Optional: Flash effect CSS (add to styles.css)
/*
.flash {
    animation: flash-bg 0.7s;
}
@keyframes flash-bg {
    0% { background: #fff; }
    50% { background: #4ecdc4; }
    100% { background: #fff; }
}
*/