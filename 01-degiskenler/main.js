let userName = "belkisarslan"
console.log(userName);

// yanlış kullanım
// console.log(fullName);
// let fullName = "Belkıs Arslan"

let inform = "Güncelleme yapılamadı."
inform = "Güncellendi"
inform += " ve yayınlandı."
console.log(inform);

// yanlış kullanım
// const password = "asdasdas"
// console.log(password);
// password = "xdxdxdxd"
// console.log(password);

var msg = "Hello World"
function test(){
    console.log(msg)
    var msg = "Hello World2"
    console.log(msg)
}
test()
console.log(msg)

let fullName = "Belkıs Arslan"
console.log(fullName)

//yanlış kullanım
// {
//     let surname = "Arslan"
// }
// console.log(surname)

const app = {
    user:"Kullanıcı 1"
}
console.log(app)

//yanlış kullanım
// app = {
//     user:"Kullanıcı 2"
// }
// console.log(app)
Object.freeze(app)
app.user = "Kullanıcı 3"
console.log(app)

//yanlış kullanım
// for (const i = 1; i <= 5; i++){
//     console.log(i)
// }

for (let i = 1; i <= 5; i++){
    console.log(i)
}

