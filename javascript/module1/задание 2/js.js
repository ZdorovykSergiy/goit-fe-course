'use strict';
const credits = 23580;
const pricePerDroid = 3000;

const numberDrones = prompt('Введите количество дронов!');

let massage; // сообщение пользователю

let sum; // сумма за дроны
if (numberDrones === null) {
  massage = 'Отменено пользователем!';
} else if (pricePerDroid * numberDrones > credits) {
  massage = 'Недостаточно средств на счету!';
} else if (pricePerDroid * numberDrones < credits) {
  const surrender = credits % pricePerDroid; //сдача
  massage = `Вы купили ${numberDrones} дроидов, на счету осталось ${surrender} кредитов.`;
}

console.log(massage);
