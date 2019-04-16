"use strict";
/* 
  В переменную value записывается случайное число.
  
  Объяви переменную type, в которую, используя ветвления запиши строку:  
    - "even" если value четное
    - "odd" если value не четное

  PS: используй тернарный оператор
*/
const value = Number.parseInt(Math.random() * 100);
let type;
// if (value % 2 == 0) {
//   type = "even";
// } else {
//   type = "odd";
// }
type = value % 2 == 0 ? "even" : "odd";
console.log(`${value} is ${type}`);

// let startOfSeason;
// const season = "summer";

// if (season === "summer") {
//   startOfSeason = "June";
// } else {
//   startOfSeason = "December";
// }

// // Конструкция if...else записанная тернарным оператором
// startOfSeason = season === "summer" ? "June" : "December";
