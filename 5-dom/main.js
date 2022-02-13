//Body'i seçip arka plan rengi değiştirme
console.log(document.body)
document.body.style.backgroundColor = "red";

//paragrafa ulaşıp rengini değiştirme
let p = document.getElementById("p")
p.style.color = "white"

//html içerik değiştirme
let link = document.querySelector("ul>li>a")
link.innerHTML = "link değiştirildi"