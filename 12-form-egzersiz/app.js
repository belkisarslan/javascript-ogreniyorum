const input = document.querySelector('.input-btn input');
const listTasks = document.querySelector('.list-tasks ol');
const message = document.querySelector('.list-tasks');
const deleteItem = document.querySelector('#deleteItem')


function addItem(){
    const task = input.value;
    if(task === ''){
        showError('Ürün Girmediniz');
        return;
    }
    input.value = '';
    console.log(task);
    let liDOM = document.createElement('li')
    liDOM.innerHTML = task
    liDOM.classList.add('li')
    listTasks.appendChild(liDOM)
    liDOM.addEventListener('click',function(){
            liDOM.style.textDecoration = 'line-through'
    })

    saveLocalList(task)

    deleteItem.addEventListener('click',function(){
        liDOM.remove()
        removeLocalList()
    })
}



function showError(error){
    const messageError = document.createElement('p');
    messageError.textContent = error;
    messageError.classList.add('error');
    message.appendChild(messageError);
    setTimeout(() => {
        messageError.remove();
    },1000);

    // console.log(error);
}

function saveLocalList(task){
    let localList;
    if(localStorage.getItem('localList') === null){
       localList = []
    }else{
        localList = JSON.parse(localStorage.getItem('localList'))
    }
    localList.push(task)
    localStorage.setItem('localList',JSON.stringify(localList))
}

function getList(){
    let localList;
    if(localStorage.getItem('localList') === null){
       localList = []
    }else{
        localList = JSON.parse(localStorage.getItem('localList'))
    }
    localList.forEach((task) => {
        let liDOM = document.createElement('li')
        liDOM.innerHTML = task
        liDOM.classList.add('li')
        listTasks.appendChild(liDOM)
        liDOM.addEventListener('click',function(){
            liDOM.style.textDecoration = 'line-through'
        })
    });
}

function removeLocalList(){
    let localList;
    if(localStorage.getItem('localList') === null){
       localList = []
    }else{
        localList = JSON.parse(localStorage.getItem('localList'))
    }
    //window.localStorage.removeItem('localList')
    localStorage.setItem('localList',JSON.stringify(localList))
}
getList()