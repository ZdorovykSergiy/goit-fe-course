"use strict";
/*
  Напиши функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки
const checkNumberType = num => {
  if (num % 2 == 0) {
    return "Even";
  }
  return "Odd";
};

console.log("even", checkNumberType(2)); // 'Even'

console.log("even", checkNumberType(46)); // 'Even'

console.log("odd", checkNumberType(3)); // 'Odd'

console.log("odd", checkNumberType(17)); // 'Odd'
