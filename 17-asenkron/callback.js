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


//ikinci örnek
const books = [
  {name: 've dağlar yankılandı', author: 'khaled hosseini'},
  {name: 'dalgalar', author: 'virginia woolf'},
  {name: 'gazap üzümleri', author: 'john steinbeck'}
]

const listBooks = () => {
  books.map((book, index) => {
    console.log(book, index)
  })
}

const addNewBook = (newBook, callback) => {
  books.push(newBook)
  callback()
}

addNewBook({name: 'bülbülü öldürmek', author: 'harper lee'}, listBooks)