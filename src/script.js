function updateUTCTime() {
  let utcTime = new Date().toUTCString();
  document.getElementById("utc-time").innerText = utcTime; // Display it
}

updateUTCTime();
setInterval(updateUTCTime, 1000);
