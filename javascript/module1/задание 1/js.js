"use strict";
const ADMIN_PASSWORD = "m4ng0h4ckz";
const canceled = "Отменено пользователем!";
const passwordError = "Доступ запрещен, неверный пароль!";
const welcome = "Добро пожаловать!";
let message;
const userInputPass = prompt("Введите Ваш пароль!");

if (!userInputPass) {
  message = "Отменено пользователем!";
  /*alert('Отменено пользователем!');*/
} else if (userInputPass !== ADMIN_PASSWORD) {
  message = "Доступ запрещен, неверный пароль!";
  /*alert('Доступ запрещен, неверный пароль!');*/
} else {
  /*alert('Добро пожаловать!');*/
  message = "Добро пожаловать!";
}

alert(message);
