// 1.
const dayTime = new Date();
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let day = weekday[dayTime.getDay()];

document.getElementById("current-day").innerText = `Today is: ${day},`;

console.log("day", day);

var today = new Date();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log("time", time);

function timer() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  // console.log("min", minutes);
  var sec = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  var timeStr =
    hours > 11
      ? `${hours} PM ` + " " + ":" + " " + minutes + " " + ":" + " " + sec
      : `${hours} AM ` + " " + ":" + " " + minutes + " " + ":" + " " + sec;

  document.getElementById("current-time").innerHTML = timeStr;
  setTimeout(timer, 1000);
}

timer();

// 2.
const d = new Date();
const m = console.log("d", d);
const currentDate = d.getDate();
const currentMonth = d.getMonth();
const currentYear = d.getFullYear();
const months = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];
document.getElementById("current-date").innerHTML =
  `${currentDate}-` + months[d.getMonth()] + `-${currentYear}`;

// 3.
const calc = document.getElementById("calc");

calc.onclick = function Area() {
  var side1 = parseInt(document.getElementById("side1").value);

  var side2 = parseInt(document.getElementById("side2").value);

  var side3 = parseInt(document.getElementById("side3").value);

  console.log(typeof side1);
  var s = (side1 + side2 + side3) / 2;

  var area = Math.round(
    Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)))
  );

  document.getElementById("display").innerHTML = area;
};

// 4.
var str = "Saylani";
var str1 = "";

var len = str.length;

var j = len - 1;

for (var i = 0; i < len; i++) {
  let extList = document.querySelector(".extList");
  //console.log(str.length);
  var sTr = str[j];
  str = str.slice(0, -1);
  // console.log(str);
  // j--;
  str = sTr + str;
  console.log(str);
  extList.innerHTML += str + "<br>" + "<br>";
}

// 5.
// program to check leap year

let lpBtn = document.getElementById("lp-btn");
lpBtn.onclick = function checkLeapYear() {
  let inpYear = Number(document.getElementById("yrinput").value);
  console.log("inpYear", inpYear);
  const leap = new Date(inpYear, 1, 29).getDate() === 29;
  let lprndr = document.getElementById("lprndr");
  if (leap) {
    lprndr.innerText = `${inpYear} is a leap year.`;
    lprndr.style.color = "green";
  } else {
    lprndr.innerText = `${inpYear} is not a leap year.`;
    lprndr.style.color = "red";
  }
};

// 6.
let sunBtn = document.getElementById("sun-btn");
sunBtn.onclick = function sunLookUp() {
  let input = Number(document.getElementById("inptyr").value);
  console.log("input", input);
  let sunRndr = document.getElementById("sunrndr");
  var year = input;
  if (year >= "2014" && year <= "2050") {
    var date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
      sunRndr.innerText = `1st January is being a Sunday in the year ${year}`;
      sunRndr.style.color = "green";
    } else {
      sunRndr.innerText = `1st January is not being a Sunday in the year ${year}`;
      sunRndr.style.color = "red";
    }
  } else {
    sunRndr.innerText = "Please enter year between 2014 and 2050.";
    sunRndr.style.color = "red";
  }
};

// 7.
let numBtn = document.getElementById("num-btn");
numBtn.onclick = function promptIt() {
  let userNum = Number(prompt("Please choose any number between 1 and 10"));
  if (userNum >= "1" && userNum <= "10") {
    alert("Good Work");
  } else {
    alert("Not matched");
  }
};

// 8.
const e = new Date();

const nDate = new Date(2022, 07, 14);

const DaysLeft = Math.round((nDate.getTime() - e.getTime()) / 86400000);
console.log("DaysLeft", DaysLeft);
let dayRndr = document.getElementById("dayrndr");
dayRndr.innerText = `${DaysLeft} days left!`;

// 9.
let num1 = Number(document.getElementById("num1").value);
let num2 = Number(document.getElementById("num2").value);
let multiBtn = document.getElementById("btn-1");
let diviBtn = document.getElementById("btn-2");

// Multiply
multiBtn.onclick = function () {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let multiBtn = document.getElementById("btn-1");
  let diviBtn = document.getElementById("btn-2");
  let multiRndr = document.getElementById("multirndr");
  let multi = num1 * num2;
  console.log("multi", multi);
  multiRndr.innerText = multi;
};
// Divide
diviBtn.onclick = function () {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let multiBtn = document.getElementById("btn-1");
  let diviBtn = document.getElementById("btn-2");
  let diviRndr = document.getElementById("divirndr");
  let divi;
  if (num1 === "0" && num2 === "0") {
    divi = Number(num1 / num2).toFixed(2);
  } else if (num2 === 0 && num1 !== 0) {
    alert("The Number 2 can not be a zero");
  } else {
    divi = Number(num1 / num2).toFixed(2);
  }
  console.log("divi", divi);
  diviRndr.innerText = divi;
};

// 10.
// Temp converter
let c2FBtn = document.getElementById("c2f");
let tempC = Number(document.getElementById("tempc").value);
let f2cBtn = document.getElementById("f2c");
let tempF = Number(document.getElementById("tempf").value);

c2FBtn.onclick = function () {
  let tempC = Number(document.getElementById("tempc").value);
  let crndr;
  crndr = (tempC * 9) / 5 + 32;
  console.log("crndr", crndr);
  let c2fRes = document.getElementById("c2fres");
  c2fRes.innerText = crndr.toFixed(2);
};

f2cBtn.onclick = function () {
  let tempF = Number(document.getElementById("tempf").value);
  let frndr;
  frndr = tempF - (32 * 5) / 9;
  console.log("frndr", frndr);
  let f2cRes = document.getElementById("f2cres");
  f2cRes.innerText = frndr.toFixed(2);
};

// 11.
let n1 = Number(document.getElementById("n1").value);
let n2 = Number(document.getElementById("n2").value);
let addBtn = document.getElementById("add-btn");
let addRes = document.getElementById("addres");

addBtn.onclick = function () {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let n3 = n1 + n2;
  if (n1 === n2) {
    n3 * 3;
    addRes.innerText = n3 * 3;
  } else {
    addRes.innerText = n3;
  }
};

// 12.
let thNum = Number(document.getElementById("thnum").value);
let thBtn = document.getElementById("th-btn");
let thRes = document.getElementById("thres");

thBtn.onclick = function () {
  let thNum = Number(document.getElementById("thnum").value);
  let thBtn = document.getElementById("th-btn");
  let thRes = document.getElementById("thres");
  if (Math.abs(100 - thNum) <= 20 || Math.abs(400 - thNum) <= 20) {
    thRes.innerText = "The given number is within the 20 of 100 or 400";
  } else {
    thRes.innerText = "The given number is not within the 20 of 100 or 400";
  }
};

// 13.
let lN1 = Number(document.getElementById("ln1").value);
let lN2 = Number(document.getElementById("ln2").value);
let lN3 = Number(document.getElementById("ln3").value);
let lnBtn = document.getElementById("ln-btn");
let lnRes = document.getElementById("lnres");

lnBtn.onclick = function () {
  let lN1 = Number(document.getElementById("ln1").value);
  let lN2 = Number(document.getElementById("ln2").value);
  let lN3 = Number(document.getElementById("ln3").value);
  let lnBtn = document.getElementById("ln-btn");
  let lnRes = document.getElementById("lnres");
  let lNum = Math.max(lN1, lN2, lN3);
  lnRes.innerText = lNum;
};
