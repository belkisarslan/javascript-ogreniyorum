fetch("settings.json").then(response =>{
    return response.json()
}).then(responseJson => {
    console.log(responseJson)
})

let userListDOM = document.querySelector('#userList')
fetch('https://jsonplaceholder.typicode.com/posts').then(
    response => response.json()
).then(json => {
    json.forEach(item => {
       let liDOM = document.createElement('li')
       liDOM.innerHTML = item.title
       userListDOM.appendChild(liDOM)
    });
})