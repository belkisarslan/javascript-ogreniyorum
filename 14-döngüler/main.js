// for(let index = 0; index < 10; index++){
//     console.log(index)
// }

// let users = ["kullanıcı1", "kullanıcı2", "kullanıcı3",]
// const userListDOM = document.querySelector('#userList')
// for(let index = 0; index < (users.length); index++){
//   const liDOM = document.createElement('li')
//   liDOM.innerHTML = users[index]
//   userListDOM.appendChild(liDOM)
// }

//break
// let users = ["ooo", "pity pity", "karamela", "sepeti", "terazi", "lastik", "jimnastik"]
// const userListDOM = document.querySelector('#userList')
// for(let index = 0; index < (users.length); index++){
//   if(users[index] == "sepeti") {break}
//   const liDOM = document.createElement('li')
//   liDOM.innerHTML = users[index]
//   userListDOM.appendChild(liDOM)
// }


//continue
// let users = ["ooo", "pity pity", "karamela", "sepeti", "terazi", "lastik", "jimnastik"]
// const userListDOM = document.querySelector('#userList')
// for(let index = 0; index < (users.length); index++){
//   if(users[index] == "sepeti") {continue}
//   const liDOM = document.createElement('li')
//   liDOM.innerHTML = users[index]
//   userListDOM.appendChild(liDOM)
// }

//while sonsuz döngü
// let num = 10
// while (num == 10){
//     console.log(num)
// }


// 1den 10a kadar sayılar
// let num=1;
// while(num<=10){
//   console.log(num);
//   num++; 
// }

//1den 10a kadar sayılar toplamı
// let num = 1,
// total = 0;
// while(num <= 10){
//   total += num;
//   num++;
// }
// console.log(total);


//forEach
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// numbers.forEach((item, index, array) => 
// console.log(item, index, array))

//forEach 1den 10a kadar sayıları toplama
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let total = 0
// numbers.forEach(function(number){
//     total += number
// })
// console.log(total)

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let total = 0
// function totalNumber(number){
//     total += number
// }
// numbers.forEach(totalNumber)
// console.log(total)

let users = ["kullanıcı1", "kullanıcı2", "kullanıcı3",]
const userListDOM = document.querySelector('#userList')
users.forEach(item =>{
  const liDOM = document.createElement('li')
  liDOM.innerHTML = item
  userListDOM.appendChild(liDOM)
})