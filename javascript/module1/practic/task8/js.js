"use strict";
/* 
  Создай скрипт поиска отелей, где пользователь с помощью prompt должен ввести число от 1 до 5.
  Проверять что пользователь может ввести что-то кроме 1-5 не нужно!
  
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  В противном случае, используя switch, вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

let choice;
const catalog = prompt("Введите выбор отеля");

if (catalog == null) {
  alert("Очень жаль, приходите еще!");
} else {
  switch (catalog) {
    case "1":
      choice = "Каталог хостелов";
      alert(choice);
      break;
    case "2":
      choice = "Каталог бюджетных отелей";
      alert(choice);
      break;
    case "3":
      choice = "Каталог отелей ***";
      alert(choice);
      break;
    case "4":
      choice = "Каталог отелей ****";
      alert(choice);
      break;
    case "5":
      choice = "Каталог лучших отелей";
      alert(choice);
      break;
  }
}

// let startOfSeason;
// const season = "summer";

// switch (season) {
//   case "winter":
//     startOfSeason = "January";
//     break;

//   case "spring":
//     startOfSeason = "May";
//     break;

//   case "summer":
//     startOfSeason = "June";
//     break;

//   case "autumn":
//     startOfSeason = "September";
//     break;

//   default:
//     console.log("Invalid season name");
// }

// console.log(startOfSeason); // June
