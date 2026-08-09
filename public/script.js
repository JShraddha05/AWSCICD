const greetBtn = document.getElementById('greetBtn');
const nameInput = document.getElementById('nameInput');
const greetResult = document.getElementById('greetResult');

const healthBtn = document.getElementById('healthBtn');
const healthResult = document.getElementById('healthResult');

greetBtn.addEventListener('click', async () => {
  const name = nameInput.value.trim();
  const url = `/api/greet${name ? `?name=${encodeURIComponent(name)}` : ''}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    greetResult.textContent = data.message;
  } catch (err) {
    greetResult.textContent = 'Something went wrong. Is the server running?';
  }
});

healthBtn.addEventListener('click', async () => {
  try {
    const res = await fetch('/api/health');
    const data = await res.json();
    healthResult.textContent = `Status: ${data.status} · ${new Date(data.time).toLocaleTimeString()}`;
  } catch (err) {
    healthResult.textContent = 'Server unreachable.';
  }
});