//Цикл for


// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }


//Практическое задание 


//От 1 до 10
// for (let i = 1; i < 11; i++) {
//     console.log(i)
// }

//Только четные числа
//  for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//          console.log(i);
//      }
//  }

//Сумма чисел от 1 до 10
// let sum = 0;
// for (let i = 1; i <= 14; i++) {
//     sum += i;
// }
// console.log(sum)

//Цикл While
// let count = 0;
// while (count < 3) {
//     console.log("Count:", count);
//     count++;
// }

//Практическое задание №2
// let number = 5;
// while (number >= 0) {
//     console.log("number =", number);
//     number--;
// }

//Цикл do...while
// let doValue = 0;
// do {
//     console.log("Value:", doValue);
//     doValue++;
// } while (doValue < 3);

//Операторы break и continue
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }
// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

//Практическое задание №4
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     if (i === 8) {
//         break;
//     }
//     console.log(i);
// }

//Вложенные циклы
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

//Практическое задание №5
// for (let i = 1; i <= 4; i++) {
//   let a = "";
//   for (let j = 1; j <= i; j++) {
//     a += "*";
//   }
//   console.log(a);
// }

//Обьявление функции
// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(3, 5));

//Практическое задание №1 6.3
// function multipy(c, d) {
//     return c * d;
// }
// console.log(multipy(4, 4))

//Функция без return
// function sayHello(name) {
//   console.log(`Hello, ${name}`);
// }
// sayHello("Иван");

//Практическая работа №2
// function printInfo(name, age){
//     console.log(`Привет, ${name} тебе ${age}`)
// }
// printInfo("Тимофей" , 18)

//6.6. Значения параметров по умолчанию
// function greet(name = "Гость"){
//     console.log("Привет, " + name);
// }
// greet();
// greet("Диана");

//Практическое задание №3
function calculateDiscount (price, discountPercent = 10) {
  return price - (price * discountPercent) / 100;
}
console.log("Авто:", calculateDiscount(1000));
console.log("Со скидкой 20%:", calculateDiscount(1000, 20));

const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3));
