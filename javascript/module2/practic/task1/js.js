"use strict";
/*
 * Есть массив имен пользователей
 * Используя методы массива, последовательно выполнить указанные операции
 */

const users = ["Mango", "Poly", "Ajax", "Chelsey"];
users.shift();
// Удалить первый элемент массива
console.log(users); // ["Poly", "Ajax", "Chelsey"]
users.pop();
// Удалить последний элемент массива
console.log(users); // ["Poly", "Ajax"]
users.unshift("Lux");
// Добавить в начало массива пользователя "Lux"
console.log(users); // ["Lux", "Poly", "Ajax"]
users.push("Jay", "Kiwi");
// Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// Удалить из массива элемент хранящийся в переменной userToDelete

const userToDelete = "Ajax";

const position = users.indexOf(userToDelete);
users.splice(position, 1);

console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
const userToInsertBefore = "Jay";
const position1 = users.indexOf(userToInsertBefore);
console.log(position1);
users.splice(position1, 0, "Kong");
console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]
