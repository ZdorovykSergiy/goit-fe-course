'use strict';
const China = 100;
const SouthAmerica = 250;
const Australia = 170;
const India = 80;
const Jamaica = 120;

const country = prompt('Вибирите страну доставки');
country.toLowerCase();
if (country === null) {
  alert('Вы отменили доставку');
} else {
  switch (country) {
    case 'китай':
      alert(`Доставка в ${country} будет стоить ${China} кредитов`);
      break;
    case 'южная америка':
      alert(`Доставка в ${country} будет стоить ${SouthAmerica} кредитов`);
      break;
    case 'австралия':
      alert(`Доставка в ${country} будет стоить ${Australia} кредитов`);
      break;
    case 'индия':
      alert(`Доставка в ${country} будет стоить ${India} кредитов`);
    case 'ямайка':
      alert(`Доставка в ${country} будет стоить ${Jamaica} кредитов`);
      break;
    default:
      alert('нет такой страны доставки');
  }
}
