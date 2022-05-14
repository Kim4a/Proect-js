// for (let i = 10; i !=1; i--) {
//     console.log(i)
// }

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i++;
// }

// console.log("======");

// let j = 0;

// do {
//     console.log(j);
//     j++;
// }while(j < 10)

// const num = 2;
// const str = "str"
// const bool = true
// const null1 = null
// const indef = undefined
// const obj = {
//     a: 1,
// };

// const arr = [1, 2, 3]

// console.log(num)
// console.log(str)
// console.log(bool)
// console.log(null1)
// console.log(indef)
// console.log(obj)
// console.log(arr)

// const age = 17;
// const sex = true;
// const firstName = "Артём";

// if (age >= 18 && firstName != "Артём") {
//   console.log(`Вам уже есть ${age} лет, и к тому же вы не Артём, проходите`);
// } else if (sex && age >=18) {
//   console.log(`Проходи, братан`);
// } else if (firstName === "Артём" && age < 20) {
//   console.log(`Пошёл нахуй, ${firstName}`);
// } else {
//   console.log("Ок");
// }

// const a = 2;
// const b = 3;
// const c = 4;

// if (a === 2 && b === 3) {
//     console.log("equel")
// }else {
//     console.log("not equel")
// }

// console.log(a ===2 && b ===3 ? "equel" : "notequel");

// const x = 3;

// switch (x) {
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//     console.log(2);
//     break;
//   case 3:
//     console, log(3);
//     break;
//   default:
//     console.log("Not found");
// }

// const email = prompt("Введите почту");
// const userSurname = prompt("Введите фамилию");
// const username = prompt("Введите имя");

// console.log(email, usersurname, username);

// const user = {
//   userEmail: email,
//   surname: userSurname,
//   name: username,
// };

// const userArray = [
//   {
//     userEmail: "qwe@gmail.com",
//     surname: "Lastochka",
//     username: "Tanya,",
//   },

//   {
//     userEmail: "test2@gmail.com",
//     surname: "Ivanova",
//     username: "Vasya,",
//   },

//   {
//     userEmail: "test3@gmail.com",
//     surname: "Ivanov",
//     username: "Ivan",
//   },
// ];

// function checkUserData(userData, arr) {
//   let flag = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr[i].userEmail === userData.userEmail &&
//       arr[i].surname === userData.surname &&
//       arr[i].username === userData.name
//     ) {
//       flag = true;
//     }
//   }

//   if (flag) {
//     alert(
//       `Привет, ${userData.name} ${userData.surname}, вот твой email: ${userData.userEmail}`
//     );
//   } else {
//     alert("Ты кто такой, я вас не знаю, идите нахуй");
//   }
// }

// checkUserData(user, userArray);

const usersArray = [
  {
    userEmail: "ivan@gmail.com",
    surname: "Ivanov",
    name: "Ivan",
  },
  {
    userEmail: "oleg@gmail.com",
    surname: "Ivanov",
    name: "Oleg",
  },
  {
    userEmail: "katya@gmail.com",
    surname: "Ivanova",
    name: "Katya",
  },
];

const newarray = [];
let counter = 0;

const countUsers = prompt("Введите количество пользователей, которых вы хотите проверить")

for (let k = 0; k < countUsers; k++){
let userEmail = prompt("Введите свою почту");
let userName = prompt("Введите свое имя");
let userSurname = prompt("Введите свою фамилию");

let user = {
email: userEmail,
name: userName,
surname: userSurname,
}


for (let i = 0; i < usersArray.length; i++) {
    if (
      usersArray[i].userEmail === user.email &&
      usersArray[i].name === user.name &&
      usersArray[i].surname === user.surname
    ){
        counter ++;
        newarray.push(usersArray[i].userEmail);
    }}
}
if (counter > 0){
    alert(`Количество совпадений: ${counter}`);
    alert(`Почта пользователей, прошедших проверку: ${newarray}`)
}else{
    alert("Пользователи не найдены")
}