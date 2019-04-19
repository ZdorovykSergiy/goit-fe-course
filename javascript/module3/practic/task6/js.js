"use strict";
/*  
  Напиши функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

const findLargestNumber = numbers => {
  let longestWordNumber = numbers[0];
  for (const number of numbers) {
    if (number > longestWordNumber) {
      longestWordNumber = number;
    }
  }
  console.log(numbers);
  console.log(longestWordNumber);
};

// Вызовы функции для проверки
console.log(findLargestNumber([1, 2, 3])); // 3

console.log(findLargestNumber([27, 12, 18, 5])); // 27

console.log(findLargestNumber([31, 128, 14, 74])); // 128
