let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event){
    console.log("işlem gerçekleşti")
    event.preventDefault()
    let scoreInputDom = document.querySelector("#score")
    console.log(scoreInputDom.value)
    localStorage.setItem('score',scoreInputDom.value)
    scoreInputDom.value = ""
}