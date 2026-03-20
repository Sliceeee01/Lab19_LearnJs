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
for (let i = 1; i <= 4; i++) {
  let a = "";
  for (let j = 1; j <= i; j++) {
    a += "*";
  }
  console.log(a);
}