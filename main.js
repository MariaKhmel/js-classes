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

/*
Напишіть код, який працює так:
1. Запитує у користувача, скільки людей прийшло на танці.
2. Виводить к консоль "всі будуть по парам", якщо число кратке 2 і "хтось залишиться без пари"
якщо ні.
*/

// const answer = prompt("How many dancers are present?")

// const estimateDancePairs = numberOfDancers => {
//   if (numberOfDancers < 1) {
//     return;
//   }
//   if (Number(numberOfDancers) % 2 === 0) {
//     console.log('Everyone has someone to dance with!')
//   } else {
//     console.log('Someone does not have a pair to dance with!')
//   }
// }

// console.log(estimateDancePairs(answer))

/*
Напишіть код, який працює так:
1. Запитує у користувача рік.
2. Виводить через alert коли у вибраному році буде Великдень.
Підказка: використовуйте алгоритм Гауса для цього.
*/

// Створіть об'єкт student, у якому будуть такі
// свійтва:
// - name;
// -last name;
// tabel – об'єкт, що зберігає всі предмети з оцінками.
// та додайте методи, що обчислюють:
// - Найгірший бал;
// - найкращий бал;

// const student = {
//   name: 'Tom',
//   lastName: 'Jenckins',
//   table: {
//     'Maths': 3,
//     'English': 4,
//     'History': 5,
//     'Literature': 1,
//   },
//   calculateLowestMark: function () {
//     const marks = Object.values(this.table);
//     return Math.min(...marks);
//   },

//   calculateHighestMark: function () {
//     const marks = Object.values(this.table);
//     let highestMark = marks[0];
//     marks.forEach(el => {
//       if (el > highestMark) {
//         highestMark = el;
//       }
//     })
//     return highestMark;
//   }

// }

// const newStudent = Object.create(student)

// console.log(newStudent.calculateLowestMark());
// console.log(newStudent.calculateHighestMark())

// Напишіть об'єкт "Кредитна картка", який має властивості:
//   - правильний pin code;
// - кількість спроб введення пін - коду, що залишилися;
// - кількість грошей на рахунку;
// - Кредитний ліміт;
// - Статус(активна або заблокована).
// І методи:
// - Зняти гроші.Отримує введений користувачем пін код та бажану суму.
//   Перевіряє, чи заблоковано картку.
// Якщо так - повертає повідомлення "Карта заблокована,
// зверніться до банку". Якщо ні - звіряє пін-код із правильним.
// Якщо все ок - перевіряє чи вистачить грошей з урахуванням ліміту.
// Якщо все ок - поверне суму та зменшує гроші на рахунку
// з урахуванням ліміту.
// Якщо сума надто велика - повертає рядок "Коштів недостатньо".
// Якщо пін - код неправильний – зменшує кількість
// спроб введення на 1 і якщо їх залишилося 0 - змінює статус на "заблоковано"

const creditCard = {
  pinCode: 56789,
  attempts: 3,
  balance: 1000,
  creditLimit: 1000,
  status: 'active',
  withDrawCash: function (pinCode, sumToWithdraw) {
    if (this.status !== 'active') {
      return 'Card is locked!'
    }

    if (pinCode !== this.pinCode) {
      this.attempts -= 1;
      if (this.attempts < 1) {
        return 'Your card is locked!'
      }
      return `Pin is incorrect! You have ${this.attempts} attempts left`
    }
    if (sumToWithdraw > (this.balance + this.creditLimit)) {
      return 'Not enough cash on the balance.'
    }

    if (this.balance >= sumToWithdraw) {
      this.balance -= sumToWithdraw;
      return 'Successful'
    } else if ((this.balance + this.creditLimit) >= sumToWithdraw) {
      const sumToWithdrawFromBalance = sumToWithdraw - this.balance;
      if (sumToWithdrawFromBalance > 0) {
        const sumToWithdrawFromCreditLimit = sumToWithdraw - sumToWithdrawFromBalance;
        this.balance -= sumToWithdrawFromBalance;
        this.creditLimit -= sumToWithdrawFromCreditLimit;
        return 'Successful'
      }
      this.creditLimit -= sumToWithdraw;
      return 'Successful'
    }
  }
}
console.log(creditCard.withDrawCash(56789, 500));
console.log(creditCard.withDrawCash(56789, 800));
console.log(creditCard.withDrawCash(56789, 1000));

