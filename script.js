// Simple JS to add workout cards
document.getElementById('workout-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const exercise = document.getElementById('exercise').value.trim();
  const duration = document.getElementById('duration').value;
  const date = document.getElementById('date').value;

  if (!exercise || !duration || !date) return;

  addWorkoutCard({ exercise, duration, date });

  // Reset form
  this.reset();
});

function addWorkoutCard({ exercise, duration, date }) {
  const container = document.querySelector('.workouts-container');

  const card = document.createElement('div');
  card.classList.add('workout-card');

  const title = document.createElement('h4');
  title.innerText = exercise;

  const info = document.createElement('p');
  info.classList.add('workout-info');
  info.innerText = `Duration: ${duration} mins\nDate: ${date}`;

  card.append(title, info);
  container.prepend(card);  // show newest first
}


