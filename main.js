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

// const creditCard = {
//   pinCode: 56789,
//   attempts: 3,
//   balance: 1000,
//   creditLimit: 1000,
//   status: 'active',
//   withDrawCash: function (pinCode, sumToWithdraw) {
//     if (this.status !== 'active') {
//       return 'Card is locked!'
//     }

//     if (pinCode !== this.pinCode) {
//       this.attempts -= 1;
//       if (this.attempts < 1) {
//         return 'Your card is locked!'
//       }
//       return `Pin is incorrect! You have ${this.attempts} attempts left`
//     }
//     if (sumToWithdraw > (this.balance + this.creditLimit)) {
//       return 'Not enough cash on the balance.'
//     }

//     if (this.balance >= sumToWithdraw) {
//       this.balance -= sumToWithdraw;
//       return 'Successful'
//     } else if ((this.balance + this.creditLimit) >= sumToWithdraw) {
//       const sumToWithdrawFromBalance = sumToWithdraw - this.balance;
//       if (sumToWithdrawFromBalance > 0) {
//         const sumToWithdrawFromCreditLimit = sumToWithdraw - sumToWithdrawFromBalance;
//         this.balance -= sumToWithdrawFromBalance;
//         this.creditLimit -= sumToWithdrawFromCreditLimit;
//         return 'Successful'
//       }
//       this.creditLimit -= sumToWithdraw;
//       return 'Successful'
//     }
//   }
// }
// console.log(creditCard.withDrawCash(56789, 500));
// console.log(creditCard.withDrawCash(56789, 800));
// console.log(creditCard.withDrawCash(56789, 1000));


// class User {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`
//   }
//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }


// const mango = new User({
//   name: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts

// const poly = new User({
//   name: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }

//   addItem(itemToAdd) {
//     this.items.push(itemToAdd)
//   }

//   removeItem(itemToRemove) {
//     const index = this.items.indexOf(itemToRemove);
//     if (index !== -1) {
//       this.items.splice(index, 1)
//     }
//   }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.log(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.log(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.log(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]


// class User {
//   #login;
//   #email;

//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high'
//   }
//   constructor(items) {
//     this.items = items;
//   }

//   addNote({ text, priority }) {
//     this.items.push({
//       text,
//       priority
//     })
//   }

//   removeNote(text) {
//     this.items.forEach((el, index) => {
//       if (el.text === text) {
//         this.items.splice(index, 1);
//         return;
//       }
//     })
//   }
//   updateNote(text, priorityToUpdate) {
//     this.items.forEach((el) => {
//       if (el.text === text) {
//         el.priority = priorityToUpdate;
//       }
//     })
//   }
// }


// const myNotes = new Notes([]);

// myNotes.addNote({ text: 'My first note', priority: Notes.Priority.LOW });
// console.log(myNotes);

// myNotes.addNote({
//   text: 'My second note',
//   priority: Notes.Priority.NORMAL,
// });


// console.log(myNotes.items)

// myNotes.removeNote('My first note');
// console.log(myNotes.items);

// myNotes.updateNote('My second note', Notes.Priority.HIGH);
// console.log(myNotes.items);

// class Toggle {
//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }

//   toggle() {
//     this.on = !this.on;
//   }
// }


// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {

//     const stone = this.stones.find((stone) => stone.name === stoneName);
//     return stone ? stone.price * stone.quantity : 'stone not found';
//   }
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600
// console.log(chopShop.calcTotalPrice('Rfy'));


// const phonebook = {
//   contacts: [],
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   }),
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   }),
// );

// const calculator = {
//   properties: [],
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   add() {
//     return this.a + this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   }

// };

// calculator.read(1, 2);
// console.log(calculator.add())

const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];

// const getModels = cars => cars.map(car => car.model);

// console.table(getModels(cars));

// const makeCarsWithDiscount = (cars, discount) => cars.map(car => {
//   return { ...car, price: car.price / (1 - discount) }
// });

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// const filterByPrice = (cars, threshold) => cars.filter(car => car.price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// const getCarsWithDiscount = cars => cars.filter(({ onSale }) => onSale === true);

// console.table(getCarsWithDiscount(cars));

// const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// const sortByAscendingAmount = cars => [...cars].sort((car1, car2) => car1.amount - car2.amount);

// console.table(sortByAscendingAmount(cars));

// const sortByDescendingPrice = cars => cars.toSorted((car1, car2) => car2.price - car1.price);

// console.table(sortByDescendingPrice(cars));

// const sortByModel = (cars, order) => {
//   if (order === 'asc') {
//     return cars.toSorted((car1, car2) => car1.model.localeCompare(car2.model))
//   } else if (order === 'desc') {
//     return cars.toSorted((car1, car2) => car2.model.localeCompare(car1.model))
//   }
// };
// const sortByModel = (cars, order) =>
//   order === 'asc'
//     ? cars.toSorted((car1, car2) => car1.model.localeCompare(car2.model))
//     : order === 'desc'
//       ? cars.toSorted((car1, car2) => car2.model.localeCompare(car1.model))
//       : cars;

// const sortByModel = (cars, order) => {
//   switch (order) {
//     case 'asc':
//       return cars.toSorted((car1, car2) => car1.model.localeCompare(car2.model));
//     case 'desc':
//       return cars.toSorted((car1, car2) => car2.model.localeCompare(car1.model))
//   }
// };

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// const getTotalAmount = cars => cars.reduce((acc, el) => {
//   return acc += el.price;

// }, 0);

// console.log(getTotalAmount(cars));