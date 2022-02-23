const todos = [
    {title: "Todo 1", description: "Sabah (@bugun_ogrendiklerim) instagram sayfası için içerik hazırlanacak."},
    {title: "Todo 2", description: "Öğlen ton balıklı salata yapılacak."},
    {title: "Todo 3", description: "Gün batımında yürüyüşe çıkılacak"}
]

let todoListElement = document.querySelector("#todoList")

function todoList(){
 setTimeout(() => {
     let todoItems = ""
     todos.forEach(item => {
       todoItems += `
       <li>
         <b>${item.title}</b>
         <p>${item.description}</p>
       </li>
       `
    })
    todoListElement.innerHTML = todoItems;
 }, 1000);
}

function newTodo(todo, callback){
  setTimeout(() => {
    todos.push(todo)
    callback()
  }, 2000);
}

newTodo({
  title : "Todo 4",
  description : "Çalışmalarını githuba yükle"
},todoList)

todoList()

