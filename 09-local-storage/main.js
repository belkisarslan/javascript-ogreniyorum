localStorage.setItem("number",11)
localStorage.getItem("number")

let user = "kullanıcı"
let items = [1,2,3,user]
console.log(items)
localStorage.setItem("newItem",items)
localStorage.setItem("newItem",JSON.stringify(items))
localStorage.getItem("newItem")
JSON.parse(localStorage.getItem("newItem"))