"use strict";

/*
  Есть три переменные name, date и roomType, содержащие имя гостя, 
  дату его прибытия на отдых и тип комнаты отеля.
  
  Создай переменную message и используя шаблонные строки запиши в нее сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
*/

const name = "Mango";
const date = "14/08/2137";
const roomType = "люкс";
const message = ` ${name} прибывает на отдых ${date} в ${roomType}`;
console.log(message); // Mango прибывает на отдых 14/08/2137 в люкс