'use strict';
/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'javascript';
user.premium = false;

console.log(user);
Object.keys(user);
for (const key in user) {
  console.table(key, ':', user[key]);
}

const entries = Object.entries(user);
console.log(entries);
for (const entry of entries) {
  const key = entry[0];
  const value = entry[1];
  console.log(`${key}: ${value}`);
}
