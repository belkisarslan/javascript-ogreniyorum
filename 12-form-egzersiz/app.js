const input = document.querySelector('.input-btn input');
const listTasks = document.querySelector('.list-tasks ol');
const message = document.querySelector('.list-tasks');


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