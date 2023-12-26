//Getting the time in milliseconds
let countDownDate = new Date("Jan 2, 2025 00:00:00").getTime();

//setInterval({},1000) ==> to execute fn after every 1000 ms or (1 sec).
let x = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let val = 1000 * 60 * 60 * 24;
  let days = Math.floor(distance / val);
  let hrs = Math.floor((distance % val) / val);
  let mins = Math.floor((distance % val) / (1000 * 60));
  let secs = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("mins").innerHTML = mins;
  document.getElementById("secs").innerHTML = secs;

  if (distance < 0) {
    //stop the interval , clear countdown
    clearInterval(x);

    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("mins").innerHTML = "00";
    document.getElementById("secs").innerHTML = "00";
  }
}, 1000);
