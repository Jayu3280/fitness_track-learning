const bpmDisplay = document.getElementById('bpm');
const heart = document.getElementById('heart');

// Simulate BPM between 60 and 100
function getRandomBPM() {
  return Math.floor(Math.random() * 40) + 60;
}

// Update BPM every 3 seconds
function updateBPM() {
  const bpm = getRandomBPM();
  bpmDisplay.textContent = bpm;

  // Adjust animation speed based on BPM
  const duration = 60 / bpm;
  heart.style.animationDuration = `${duration}s`;
}

setInterval(updateBPM, 3000);
updateBPM(); // Initial call
