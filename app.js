const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const weekday = document.querySelector("#weekday");
const weekindays = document.querySelector("#weekindays");
const months = document.querySelector("#months");
let daysInWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
setInterval(() => {
  const time = new Date();
  hours.innerHTML =
    time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  if (time.getMinutes() < 10) {
    minutes.innerHTML = "0" + time.getMinutes();
  } else {
    minutes.innerHTML = time.getMinutes();
  }
  seconds.innerHTML =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  weekday.innerHTML = ", " + time.getDate();
  weekindays.innerHTML = daysInWeek[time.getDay()].slice(0, 3);
  months.innerHTML = ", " + month[time.getMonth()];
}, 1000);