let item1 = {}
let item2 = new Object()

let day = {
    pzrtsi : "bulutlu",
    sal : "güneşli",
    carş : "yağmurlu",
    pers : "parçalı",
    cum : "karlı",
    cmts : "rüzgürlı",
    pzr : "sisli"
}


//Salı gününün hava durumuna ulaşalım
console.log(day.sal)


//Çarşamba gününün hava durumunu güncelleyerek sağanak yağmurlu yapalım.
day.carş = "sağanak yağmurlu"


//hava durumuna iyi bir temenni ekleyelim
day.info = "Haftanız güzel geçsin"
console.log(day)

console.log(Object.keys(day))


console.log(Object.values(day))


//Object Literal
const person = {
    name: "blks",
    surname: "arsln",
    age: "30",
    fullName: function(){
        return this.name + '' + this.surname
    }
}
console.log(person)


//dot Notation
console.log(person.name)
console.log(person.age)
console.log(person.fullName())

person.job = "student"

console.log(person)
console.log(person.job)


//bracket notation
console.log(person['name'])
console.log(person['job'])
console.log(person['fullName']())
console.log(person['na'+'me'])


//constructor
function Person(name, surname, age){
    const obj = {}
    obj.name = name
    obj.surname = surname
    obj.age = age
    obj.fullName = function(){
        return obj.name + '' + obj.surname
    }
    return obj
}
const person1 = new Person('peter', 'pan', 8)
const person2 = new Person('heidi', 'adelheid', 5)
console.log(person1)
console.log(person2)



//object constructor
const person3 = new Object()
person3.name = 'cedric'
person3.surname = 'CEDRİC'
person3.age = 8
person3.fullName = function(){
    console.log(this)
    return this.name + " " + this.surname
}
console.log(person3)
console.log(person3.age)
console.log(person3.fullName())


//object.create()
const chen = Object.create(person3)
chen.name = 'chen'
chen.surname = 'CHEN'
chen.age = 8
console.log(chen)
console.log(chen.fullName())
console.log(person3)


//object destructuring
const person4 = {
    name : 'harry',
    surname : 'potter',
    age : 11
}

let {name: name, surname: surname, age: age} = person4
console.log(name, surname, age)


//spread operator in object literals (...)
const person5 = {...person4}
console.log(person5)


//class
class Person7 {
    constructor(name,job){
        this.name = name
        this.job = job
    }
}
let tom = new Person7 ('tom', 'student')
let jerry = new Person7 ('jerry', 'student')
console.log(tom, jerry)

//subclasses
class Student extends Person7{
    constructor(name, job, number){
        super(name, job)
        this.number = number
    }
}
let student = new Student('duffy','student', '1234')
console.log(student)