'use strict';

/*
  Необходимо написать скрипт проверки количества товаров на складе.
  Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
  
  Сравни эти значения и по результатам выведи:
  
    - Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!"
    - Если в заказе указано число товаров, равное количеству товара на складе, то выведи сообщение "Вы забираете весь товар cо склада!"
    - В иных случаях выводи сообщение "Заказ оформлен, с вами свяжется менеджер"
    
  Проверь работоспособность кода с разными значениями переменной ordered.
*/

const total = 100;
const ordered = 50;

let massage;
const order = number.prompt('Введите заказ');

if (order > total) {
  massage = 'На складе недостаточно товаров';
} else if (order == total) {
  massage = 'Вы забираете весь товар cо склада!';
} else {
  massage = 'Заказ оформлен, с вами свяжется менеджер';
}
alert(massage);
