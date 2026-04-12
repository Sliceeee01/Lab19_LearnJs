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
// function calculateDiscount (price, discountPercent = 10) {
//   return price - (price * discountPercent) / 100;
// }
// console.log("Авто:", calculateDiscount(1000));
// console.log("Со скидкой 20%:", calculateDiscount(1000, 20));

// const add = function (a, b) {
//   return a + b;
// };
// console.log(add(2, 3));

// const add = function (a, b) {
//     return a + b;
// };
// console.log(add(2, 3));

// function makeCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function sumFunc(a, b) {
//     return a + b;
// }
// const sumFunc2 = (a, b) => a + b;

// const double = x => x * 2;

// const sumFunc3 = (a, b) => a + b;

// const sayGreeting = () => console.log("Hello");

// const square = x => x * x;
// const calculate = (a, b) => {
//     let result = a + b;
//     return result * 2;
// };

// let numbersArr = [1, 2, 3, 4, 5];
// console.log(numbersArr);

// console.log(numbersArr[0]);
// console.log(numbersArr[1]);

// let colors = ["red", "green", "blue"];
// console.log(colors[0]);
// console.log(colors[colors.length - 1]);
// colors[1] = "yellow";
// console.log(colors);

// console.log(numbersArr.length);


// numbersArr.push(10);
// console.log(numbersArr);
// numbersArr.pop();
// console.log(numbersArr);

// let students = [];
// students.push("Alice");
// students.push("Bob");
// students.push("Charlie");
// students.pop();
// console.log(students);

// let numbers2 = [10, 20, 30];
// for (let i = 0; i < numbers2.length; i++) {
// console.log(numbers2[i]);
// }


// for (let value of numbers2) {
// console.log(value);
// }

// let mixedArray = [1, "text", true, 3.14];
// console.log(mixedArray);

// console.log(numbersArr.includes(1));
// console.log(numbersArr.indexOf(2));

// console.log(fruits.includes("яблоко")); 
// console.log(fruits.includes("манго")); 

// let cities = ["Москва", "Париж", "Лондон", "Берлин"];
// let searchCity = "Лондон";
// if (cities.includes(searchCity)) {
//     console.log(cities.indexOf(searchCity));
// } else {
//     console.log("Город не найден");
// }

// let user2 = {
//   name: "Ivan",
//   age: 20,
//   isStudent: true,
// };
// console.log(user2);


// console.log(user2.name);
// console.log(user2.age);

// console.log(user2["name"]);

// let book = {
//     title: "Harry Poter",
//     author: "Bogdanov Vanya",
//     year: 2000
// };
// console.log(book.title);
// console.log(book.author);
// console.log(book.year);
// book.year = 2027;
// console.log(book.year);

// user2.age = 30;
// user2.name = "Кирилл";
// delete user2.isStudent;
// console.log(user2);

// let user2 = {
// name: "Ivan",
// age: 20,
// isStudent: true,
// sayHello: function () {
// console.log(`Hello, my name is ${name}`);
// },
// };
// user2.sayHello(); 

// let car = {
//     brand: "Toyota",
//     year: 2020,
//     getInfo: function() {
//         console.log("Car: " + this.brand + ", Year: " + this.year);
//     }
// };
// car.getInfo();

// for (let key in user2) {
// console.log(key + ":" + user2[key]);
// }

// let product = {
//     name: "Ноутбук",
//     price: 50000,
//     brand: "Lenovo",
//     inStock: true
// };

// for (let key in product) {
//     console.log(key + ": " + product[key]);
// }

let student = {
name: "Григорий",
skills: ["HTML", "CSS", "JS"],
address: {
city: "Волжский",
street: "Пушкина",
},
};
console.log(student.skills[0]);
console.log(student.address.city);