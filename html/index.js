window.addEventListener('message', (event) => {
  if (event.data.type === 'updatePlayerId') {
      const playerIdElement = document.getElementById('playerIdValue');
      playerIdElement.textContent = `${event.data.value}`;
  }
});

// Get Local Time
function updateLocalTime() {
    const localTimeElement = document.getElementById('LocalTime');
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'};
    const localTime = new Date().toLocaleString('en-US', options);
    localTimeElement.textContent = localTime;
}

// Update every second
setInterval(updateLocalTime, 1000);

// Initial update
updateLocalTime();