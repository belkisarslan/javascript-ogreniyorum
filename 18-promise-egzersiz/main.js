const boxA = document.querySelector('.boxA')
const boxB = document.querySelector('.boxB')
const boxC = document.querySelector('.boxC')
const boxD = document.querySelector('.boxD')


// new Promise((resolve, reject)=> {
//     resolve()
//     reject()
// }).then(data=>{
//     console.log(data)
// }).catch(data=>{
//     console.log(data)
// })

const waitA = ms => new Promise(resolve => setTimeout(resolve, ms))

waitA(1000).then(() => {
    boxA.classList.add('bigger')
    return waitA(1000)
}).then(() => {
    boxA.classList.add('color')
    return waitA(1000)
}).then(() => {
    boxA.classList.add('circle')
    return waitA(1000)
}).then(() => {
    boxA.classList.add('move')
    return waitA(1000)
}).then(() => {
    boxA.classList.add('colored')
    return waitA(1000)
}).then(() => {
    boxA.classList.remove('color')
    return waitA(1000)
}).then(() => {
    boxA.classList.remove('move')
    return waitA(1000)
}).then(() => {
    boxA.classList.remove('bigger')
    return waitA(1000)
})

const waitB = ms => new Promise(resolve => setTimeout(resolve, ms))

waitB(1000).then(() => {
    boxB.classList.add('bigger')
    return waitB(1000)
}).then(() => {
    boxB.classList.add('color')
    return waitA(1000)
}).then(() => {
    boxB.classList.add('circle')
    return waitB(1000)
}).then(() => {
    boxB.classList.add('move')
    return waitB(1000)
}).then(() => {
    boxB.classList.add('colored')
    return waitB(1000)
}).then(() => {
    boxB.classList.remove('color')
    return waitB(1000)
}).then(() => {
    boxB.classList.remove('move')
    return waitB(1000)
}).then(() => {
    boxB.classList.remove('bigger')
    return waitB(1000)
})

const waitC = ms => new Promise(resolve => setTimeout(resolve, ms))

waitC(1000).then(() => {
    boxC.classList.add('bigger')
    return waitC(1000)
}).then(() => {
    boxC.classList.add('color')
    return waitA(1000)
}).then(() => {
    boxC.classList.add('circle')
    return waitC(1000)
}).then(() => {
    boxC.classList.add('move')
    return waitC(1000)
}).then(() => {
    boxC.classList.add('colored')
    return waitC(1000)
}).then(() => {
    boxC.classList.remove('color')
    return waitC(1000)
}).then(() => {
    boxC.classList.remove('move')
    return waitC(1000)
}).then(() => {
    boxC.classList.remove('bigger')
    return waitC(1000)
})

const waitD = ms => new Promise(resolve => setTimeout(resolve, ms))

waitD(1000).then(() => {
    boxD.classList.add('bigger')
    return waitD(1000)
}).then(() => {
    boxD.classList.add('color')
    return waitA(1000)
}).then(() => {
    boxD.classList.add('circle')
    return waitD(1000)
}).then(() => {
    boxD.classList.add('move')
    return waitD(1000)
}).then(() => {
    boxD.classList.add('colored')
    return waitD(1000)
}).then(() => {
    boxD.classList.remove('color')
    return waitD(1000)
}).then(() => {
    boxD.classList.remove('move')
    return waitD(1000)
}).then(() => {
    boxD.classList.remove('bigger')
    return waitD(1000)
})