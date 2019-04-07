"use strict";

const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
let attemptsLeft = 3;
let n;
for (let i = 0; i < attemptsLeft; i += 1) {
  const PasswordEntry = prompt("Введите пароль");
  if (PasswordEntry === passwords[i]) {
    alert("Добро пожаловать!");
  } else if (PasswordEntry !== passwords[i] && PasswordEntry === null) {
    n = attemptsLeft - 1;
    alert(`Неверный пароль, у вас осталось попыток`);
  }
}
