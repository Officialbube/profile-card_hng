// Function to update UTC time
function updateUTCTime() {
    const now = new Date();
    const utcTimeString = now.toUTCString();
    document.getElementById('utc-time').textContent = utcTimeString;
}

// Update time immediately and set up interval
updateUTCTime();
setInterval(updateUTCTime, 1000);