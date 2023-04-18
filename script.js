const days = document.querySelector("#days");
const hours = document.querySelector("#Hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

// Set the target date here
const targetDate = new Date("2023-04-19T12:30:00");

function updateTime() {
  const now = new Date();
  const diff = targetDate - now;

  if (now >= targetDate) {
    // Input date has passed
    clearInterval(intervalId);
    alert("Hello, Shamna! This is your 21st birthday. Wishing you a very happy birthday!");
    window.location.href = "./wish/index.html"; // Replace with the URL of the next webpage
  } else {
    // Input date hasn't passed yet
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor((diff / 1000 / 60 / 60) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);

    days.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
  }
}

updateTime(); // Call the function once to avoid a delay
const intervalId = setInterval(updateTime, 500);
