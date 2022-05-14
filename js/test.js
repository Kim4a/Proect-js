// СТРОКА

// const someStr = "Hello world";

// function reverseStr (str) {
//     return str.split("").reverse().join(" ")
// }

// console.log(reverseStr(someStr));


// ЧИСЛО

// const someStr = "12";

// console.log(Number(someStr));


// ОКРУГЛЕНИЕ ЧИСЕЛ

// const someNum = 12.12542441;

// console.log(someNum.toFixed(3));


// МАССИВЫ

const nums = [1, 2, 3, 4];
const nums2 = [5, 6, 7];

const result = [...nums, ...nums2, 9, 10];

// for (el of result) {
//     console.log(el);

// const doubleNum = nums.map((el) => {
//     return el * 2;
// });

// console.log(nums);
// console.log(doubleNum);

const filteredNums = nums.filter((el) => el %2 === 0);

console.log(filteredNums)


" 3 1 4 5 8 2" -> "8 1"

// метод МЭС/ИЗНАН 