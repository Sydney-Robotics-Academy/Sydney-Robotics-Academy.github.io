// Set the target date and time
const nationals = new Date("December 4, 2024 07:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = nationals - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("title").innerHTML = "Countdown to Australian National Championships";
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Update countdown every second
const countdown = setInterval(updateCountdown, 1000);
