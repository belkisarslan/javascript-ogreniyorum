//Body'i seçip arka plan rengi değiştirme
console.log(document.body)
document.body.style.backgroundColor = "red";

//paragrafa ulaşıp rengini değiştirme
let p = document.getElementById("p")
p.style.color = "white"

//html içerik değiştirme
let link = document.querySelector("ul>li>a")
link.innerHTML = "link değiştirildi"

//liste içindeki son elemana ulaşma
let item = document.querySelector("li:last-child");
console.log(item.innerHTML)
item.innerHTML = "son öge değiştirildi"

//listeye yeni eleman ekleme
let newItem = document.querySelector("ul")
let newLi = document.createElement('li')
newLi.innerHTML = "yeni oluşturulan öge"
newItem.append(newLi)