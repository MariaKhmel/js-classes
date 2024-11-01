// Користувач вводить вік.Напишіть функцію,
//   яка перевіряє, чи є введене число
// віком, і повертає true,
//   якщо це правда, і false – якщо ні.
//  Критерії віку:
// - ціле число;
// - Більше 0

const checkUserAge = () => {
  const userAgeInput = prompt('What is your age?');
  const result = Number(userAgeInput);

  if (typeof result === 'number' && result > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkUserAge())

