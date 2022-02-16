function hello(){
    console.log("Merhaba")
    welcome()
}

function welcome(){
    console.log('Hoş geldiniz')
}

hello() 

// Arrow Function

const hello2 = (name) => `Merhaba ${name} hoş geldiniz`
console.log(hello2("Belkıs Arslan"))

//Click Event

// let title = document.querySelector(".title")
// title.addEventListener("click", function(){
//     console.log("tıklandı")
// })

//DOM Click

let title = document.querySelector(".title")
title.addEventListener("click",domClick)

function domClick(){
    console.log('tıklandı')
    // console.log(this.innerHTML = "Tıklanınca bilgi değişti")
    // console.log(this.style.color = "red")
    this.style.color == "red" ? this.style.color ="black" : this.style.color ="red"
}