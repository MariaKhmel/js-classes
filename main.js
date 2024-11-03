// Користувач вводить вік.Напишіть функцію,
//   яка перевіряє, чи є введене число
// віком, і повертає true,
//   якщо це правда, і false – якщо ні.
//  Критерії віку:
// - ціле число;
// - Більше 0

// const checkUserAge = () => {
//   const userAgeInput = prompt('What is your age?');
//   const result = Number(userAgeInput);

//   if (typeof result === 'number' && result > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkUserAge())

// Напишіть функцію, яка перевіряє, чи можна людині
// у такому віці отримати права.Функція отримує
// 2 аргументи: вік та категорію прав.Критерії оцінки:
// - якщо права категорії А1 або А2 - їх можна отримати
//  із 16 років.
//  - Права категорій B1, B2 і т.д. - З 18.
//  Функція повертає true, якщо передану категорію
//  можна отримати в віці, і false, якщо ні.


// const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const form = e.target;
//   const age = Number(form.elements.age.value);
//   const category = form.elements.category.value;
//   if (age >= 18) {
//     console.log(true)
//   } else if (age >= 16 && (category === 'A1' || category === 'A2')) {
//     console.log(true)
//   } else {
//     console.log(false)
//   }
// });


// const checkUserAge = () => {
//   console.log(userAgeValue)
// }

// console.log(checkUserAge())

/*
        Напишіть функцію, що перевіряє чи можно призвати людину на строковую службу на основі
        гостроти зору. Сама функція має повертати true, якщо гострота зору -6 або меньше и false -
        якщо більша. Для перевірки гостроту зору можно запитувати її користувача за домопогою prompt.
        */


// const checkEyeSight = () => {
//   const answer = prompt('What is your eyesight?');
//   if (Number(answer) > -6) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkEyeSight())

/*
      напишіть функцію, яка отримує в якості аргументів зарплатню у гривні та назву валюти скорочено (usd, euro),
      та повертає зарплатню у долларі по формулі грн/42, або зарплатню у євро по формулі грн/45,
      або зарплатню у гривні, якщо валюта інша.
      */

// const calculateSalary = (salaryAmout, currency) => {
//   if (currency === 'usd') {
//     return (salaryAmout / 42).toFixed(2);
//   } else if (currency === 'euro') {
//     return (salaryAmout / 45).toFixed(2);
//   } else {
//     return salaryAmout;
//   }
// }

// console.log(calculateSalary(1000, 'usd'))

// console.log(calculateSalary(1000, 'euro'))
// console.log(calculateSalary(1000, 'hrn'))

// const calculateSalary = (salaryAmout, currency) => {

//   switch (currency) {
//     case 'usd':
//       return (salaryAmout / 42).toFixed(2)
//     case 'euro':
//       return (salaryAmout / 45).toFixed(2)
//     default:
//       return salaryAmout;
//   }
// }

// console.log(calculateSalary(1000, 'usd'))

// console.log(calculateSalary(1000, 'euro'))
// console.log(calculateSalary(1000, 'hrn'))

/*
        Напишіть 2 функції:
        1. Конвертує вагу у фунтах у вагу в кілограмах: 1 фут це 0,453 кг.
        2. Отримує 2 аргументи - зріст у футах та зріст у дюймах, і повертає сумарний зріст у см.
        1 фут = 34.8 см, 1 дюйм = 2.54 см
        */

// const weightCalculator = weightInFeet => {
//   return (weightInFeet * 0.453).toFixed(1);

// }

// console.log(weightCalculator(100))

// const heightCalculator = (heightInFeets, heightInInches) => {
//   return heightInFeet * 34.8 + heightInInches * 2.54;
// }

// console.log(heightCalculator(1000, 1000))


/*
      Напишіть функцію, яка отримує радіус кола и повертає його площу за формулою:
      число пі помножити на радіус у квадраті.
      */

// const areaCalculator = radius => {
//   return Math.pow(radius, 2) * 3.14;
// }

// console.log(areaCalculator(10))

const floors = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < floors.length; i += 1) {
//   if (floors[i] === 4) {
//     continue;
//   }
//   console.log(`floor - ${floors[i]}`)
// }

// for (const floor of floors) {
//   if (floor === 4) {
//     continue;
//   }
//   console.log(`floor - ${floor}`)
// }

