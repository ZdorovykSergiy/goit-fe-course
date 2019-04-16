"use strict";
/*
 * Напиши скрипт по автоматизации оплаты процесса гравировки украшений.
 * Гравировка одного слова стоит 10 кредитов.
 */

// В переменной message хранится произвольная строка
const message = "Proin sociis natoque et magnis parturient montes mus";
let price = 0;
const words = message.split(" ");
// Разбить строку в массив, разделитель - пробел, и записать в переменную words
console.log(words);
const length1 = words.length;
// Выведи в консоли длину массива words
console.log("Длина массива, ", length1); // 8
price = length1 * 10;
// Вычисли сколько будет стоить гравировка и запиши результат в переменную price
console.log(price); // 80
