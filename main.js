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


const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const age = Number(form.elements.age.value);
  const category = form.elements.category.value;
  if (age >= 18) {
    console.log(true)
  } else if (age >= 16 && (category === 'A1' || category === 'A2')) {
    console.log(true)
  } else {
    console.log(false)
  }
});


// const checkUserAge = () => {
//   console.log(userAgeValue)
// }

// console.log(checkUserAge())