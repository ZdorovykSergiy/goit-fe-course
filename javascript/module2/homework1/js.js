'use strict';

let input;
const numbers = [];
let total = 0;

while (true) {
  input = +prompt('Введите число');
  numbers.push(input);
  let i;
  if (input == '' || input == null) {
    for (i = 0; i < numbers.length; i += 1) {
      total += numbers[i];
    }
    console.log(total);
    break;
  }
}
