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


// const getModelsOnSale = cars => cars.filter(car => car.onSale === true).map(car => car.model);

// console.table(getModelsOnSale(cars));

// const getSortedCarsOnSale = cars => cars.filter(car => car.onSale === true).toSorted((car1, car2) => car1.price - car2.price);

// console.log(getSortedCarsOnSale(cars));

// Solution


// createProduct(obj, callback) - accepts a product object without an id, and also callback.
// The function creates a product object by adding a unique identifier to it in property id 
// and calls the callback passing it the created object.
// logProduct(product) - callback accepting a product object and logging it to console
// logTotalPrice(product) - callback receiving product object and logging the total value of the item in the console



// const createProduct = (partialProduct, callback) => {
//   const product = {
//     id: Date.now(),
//     ...partialProduct
//   }
//   callback(product);
// }

// const logProduct = product => console.log(product);
// const logTotalPrice = (product) => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);


// Add methods withdraw(amount, onSuccess, onError) to the account object and
// deposit(amount, onSuccess, onError), where the first parameter is 
// the amount of the operation, and second and third are callbacks.

// The withdraw method raises onError if amount is greater than TRANSACTION_LIMIT or this.balance,
//   and onSuccess otherwise.deposit method raises onError if amount is greater than TRANSACTION_LIMIT
//    or less or either zero and onSuccess otherwise.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount >= TRANSACTION_LIMIT) {
//       onError('Amount should not exceed TRANSACTION_LIMIT')
//     } else if (amount > this.balance) {
//       onError('Amount should not exceed balance')
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance:${this.balance} `)
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount >= TRANSACTION_LIMIT) {
//       onError('Amount should not exceed TRANSACTION_LIMIT')
//     } else if (amount <= 0) {
//       onError('Amount should not be a postive value')
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance:${this.balance} `)
//     }
//   }
// }

// function handleSuccess(message) {
//   console.log(`Success! ${message}`);
// }

// function handleError(message) {
//   console.log(`Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);


// const each = (array, callback) => {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
// }

// console.log(
//   each([64, 49, 36, 25, 16], (value) => value * 2));

// console.log(
//   each([64, 49, 36, 25, 16], (value) => value - 10));
// console.log(
//   each([64, 49, 36, 25, 16], (value) => Math.sqrt(value)));
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));

// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], (value) => Math.floor(value)));


// const logItems = (items) => {
//   console.log(items);
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`)
//   }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

// function printContactsInfo({ names, phones }) {
//   const namesList = names.split(',');
//   const phonesList = phones.split(',');
//   for (let i = 0; i < namesList.length; i += 1) {
//     console.log(`${namesList[i]} - ${phonesList[i]}`)
//   }
// }

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// function calсulateAverage(...args) {
//   const total = args.reduce((acc, el) => {
//     return acc += el;
//   }, 0)
//   return total / args.length;
// }

// console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
// console.log(calсulateAverage(14, 8, 2)); // 8
// console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2

// function calcBMI({ weight, height }) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));
//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // It was
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Is expected 
// console.log(
//   calcBMI({
//     weight: '88,3',
//     height: '1.75',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '68,3',
//     height: '1.65',
//   }),
// );
// console.log(
//   calcBMI({
//     weight: '118,3',
//     height: '1.95',
//   }),
// );

function printContactsInfo({ names, phones }) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

// It was
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Is expected
// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });

// function getBotReport({ companyName, bots: { repair: repairBots, defence: defenceBots } }) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// // It was
// // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // Is expected 
// console.log(
//   getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//       repair: 150,
//       defence: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 bots in stock"

// Solution
// function getStockReport({ companyName, stock }) {
//   let total = 0;
//   for (const value of Object.values(stock)) {
//     total += value;
//   }
//   return `${companyName} has ${total} items in stock`;
// }

// console.log(
//   getStockReport({
//     companyName: 'Cyberdyne Systems',
//     stock: {
//       repairBots: 150,
//       defenceBots: 50,
//     },
//   }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//   getStockReport({
//     companyName: 'Belacci',
//     stock: {
//       shoes: 20,
//       skirts: 10,
//       hats: 5,
//     },
//   }),
// ); // "Belacci has 35 item in stock"


// const stones = [
//   { name: 'Emerald', price: 1300, quantity: 4 },
//   { name: 'Diamond', price: 2700, quantity: 3 },
//   { name: 'Sapphire', price: 400, quantity: 7 },
//   { name: 'Rubble', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   const stone = stones.find(stone => stone.name === stoneName);
//   return stone.price * stone.quantity;
// }

// console.log(calcTotalPrice(stones, 'Rubble'))



/*
 * There are only two types of transaction.
 * You can deposit or withdraw money from your account.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Each transaction is an object with properties: id, type and amount
 */

// const account = {
//   // Current account balance
//   balance: 0,

//   // Transaction History
//   transactions: [],

//   /*
//    * Method creates and returns a transaction object.
//    * Accepts amount and type of transaction.
//    */
//   createTransaction(amount, type) {
//     return {
//       id: 1,
//       type: type,
//       amount: amount,
//     }

//   },

//   /*
//    * The method responsible for adding the amount to the balance..
//    * Accepts the amount of the transaction.
//    * Calls createTransaction to create a transaction object
//    * then adds it to the transaction history
//    */
//   deposit(amount) {
//     const newTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(newTransaction);
//     this.balance += amount;
//   },

//   /*
//    *The method responsible for withdrawing the amount from the balance.
//    * Принимает сумму танзакции.
//    * Calls createTransaction to create a transaction object
//    * then adds it to the transaction history.
//    *
//    * If amount is greater than the current balance, display a message
//    * about the fact that the withdrawal of such an amount is not possible, there are not enough funds.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       return 'Not enough funds'
//     }
//     const newTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
//     this.transactions.push(newTransaction);
//     this.balance -= amount;
//   },

//   /*
//    * The method returns the current balance
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * The method searches and returns the transaction object by id
//    */
//   getTransactionDetails(id) {
//     return this.transactions.find(transaction => transaction.id === id);
//   },

//   /*
//    * The method returns the amount of funds
//    *a specific type of transaction from the entire history of transactions
//    */
//   getTransactionTotal(type) {
//     return this.transactions.filter(transaction => transaction.type === type)
//   },
// };


// account.deposit(1000);
// console.log(account.transactions)
// account.withdraw(300);
// console.log(account.transactions)
// console.log(account.balance)
// console.log(account.getTransactionDetails(1))
// console.log(account.getTransactionTotal(Transaction.DEPOSIT))

// const calcBMI = (weight, height) => {
//   const weightToNumber = Number(weight.replace(',', '.'));
//   const heightToNumber = Number(height.replace(',', '.'));
//   return (weightToNumber / heightToNumber ** 2).toFixed(1);
// }


// const bmi = calcBMI('88,3', '1.75');
// console.log(bmi); // 28.8

// const min = (num1, num2) => {
//   return Math.min(num1, num2);
// }


// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1


// function getRectArea(dimensions) {
//   const values = dimensions.split(' ').map(Number);
//   return values[0] * values[1];
// }

// console.log(getRectArea('8 11'));

// function findLargestNumber(numbers) {
//   return numbers.reduce((acc, number) => {
//     return acc < number ? number : acc;
//   }, numbers[0])
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// function calAverage(...numbers) {
//   const total = numbers.reduce((acc, num) => {
//     return acc += num;
//   }, 0)
//   return total / numbers.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// function formatTime(minutes) { }

// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"

// Write functions to work with the courses collection of training courses:

// addCourse(name) - adds a course to the end of the collection
// removeCourse(name) - removes a course from the collection
// updateCourse(oldName, newName) - changes the name to a new one

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// const addCourse = (name) => {
//   if (courses.includes(name)) {
//     return ' You already have this course';
//   }
//   courses.push(name)
// };
// const removeCourse = (name) => {
//   const courseToDelete = courses.indexOf(name);
//   if (courseToDelete !== -1) {
//     courses.splice(courseToDelete, 1)
//   } else {
//     return 'Course with this name was not found';
//   }

// }

// const updateCourse = (oldCourse, newCourse) => {
//   const courseToUpdate = courses.indexOf(oldCourse);
//   courses.splice(courseToUpdate, 1, newCourse);
// }

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// console.log(addCourse('CSS')); // ' You already have this course'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// console.log(removeCourse('Vue')); // 'Course with this name was not found'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']


// Write a script that prints to the console all the words of a string 
// except the first and the last one.
// The resulting string must not start or end whitespace character.
// The script should work for any line.

// const string = 'Welcome to the future';

// const fn = string => {
//   const arr = string.split(' ');
//   arr.pop();
//   arr.shift();
//   return arr.join(' ').trim();
// }

// console.log(fn(string));

// Write a script that "unwraps" a string(reverse letter order) and prints it to the console.


// const string = 'Welcome to the future';
// const unwrap = string.split('').reverse().join('');
// console.log(unwrap)

// let reversedString = '';

// for (let i = string.length - 1; i >= 0; i--) {
//   reversedString += string[i];
// }
// console.log(reversedString)


// example 7 - Sorting an array with a loop
// Write a script to sort an array of strings alphabetically by the first letter of an element.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// langs.sort((a, b) => a.localeCompare(b))
// console.log(langs)
// Example 8 - Search for an element
// Write a script to find the smallest number in an array.The code should work for any array of numbers.Use a loop to solve problems.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < min) {
//     min = numbers[i]
//   }
// }

// console.log(min); // 1

// Write a script that checks if the value of the link variable ends symbol /.
// if not, add this character to the end of the link value.Use if...else construction.

// let link = 'https://my-site.com/about';
// // Write code below this line
// if (link[link.length - 1] !== '/') {
//   link += '/';
// }
// // Write code above this line
// console.log(link);

// // Write a script that checks if the value of the link variable ends by symbol /.
// // If not, append this character to the end of the link value,
// //   but only if link contains the substring "my-site".

// let link = 'https://somesite.com/about';
// // Write code below this line

// if (link[link.length - 1] !== '/' && link.includes("my-site")) {
//   link += '/';
// }

// // Write code above this line
// console.log(link);

// let link = 'https://somesite.com/about';
// link.includes('my-site') && !link.endsWith('/') ? link += '/' : link;
// console.log(link);

// Write a script that will output a string to the browser console depending on hours variable values.

// const daysUntilDeadline = 1;
// switch (daysUntilDeadline) {
//   case (0):
//     console.log('Today');
//     break;
//   case (1):
//     console.log('Tomorrow');
//     break;
//   case (2):
//     console.log('The day after tomorrow');
//     break;
//   default:
//     console.log('Date in the future');

// }


// Write a for loop that prints numbers in ascending order to the browser console 
// from min to max, but only if the number is a multiple of 5.
// const max = 100;
// const min = 20;

// for (let i = min; i <= max; i += 5) {
//   console.log(i)
// }

// Example 12 - User Input and Branching
// Write a script that will ask for login using prompt and log result in browser console.

// If the visitor enters "Admin", then prompt prompts for a password
// If nothing is entered or the Esc key is pressed - print the line "Canceled"
// Otherwise print the string "I don't know you"
// Check password like this:

// If the password is "I'm an admin", then output the string "Hello!"
// Else output the string "Wrong password"

// const login = prompt('login');


// if (login === "Admin") {
//   const password = prompt('password');
//   if (password === "I'm an admin") {
//     console.log('Hello!')
//   } else {
//     console.log('wrong pass')
//   }
// } else if (login === null) {
//   console.log("Canceled")
// } else {
//   console.log("I don't know you")
// }

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// console.log(undefined === undefined)
// const incomingValue = 0;
// const defaultValue = 10
// const value = incomingValue ?? defaultValue;
// console.log(value);

const totalMinutes = 70;


const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const hoursToStr = String(hours).padStart(2, '0');
const minutesToStr = String(minutes).padStart(2, '0');
console.log(hoursToStr, minutesToStr)

console.log(Object.assign({}, { a: 1 }, { b: 1 }));