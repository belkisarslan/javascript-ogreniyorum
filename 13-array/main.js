let user = "kullanıcı"
let isActive = false
let items = [20, 30, 40, isActive, user]
console.log(items)
//Dizinin eleman sayısı
console.log(items.length)

//Dizinin ilk elemanı
console.log(items[0])

//Dizinin son elemanı
console.log(items[items.length-1])

//Dizinin sonuna eleman ekleme
items.push(50)
console.log(items)

//Dizinin başına eleman ekleme
items.unshift(10)
console.log(items)

//Sondaki elemanı çıkarmak
let lastItem = items.pop()
console.log(items)

//Baştaki elemanı çıkarmak
let firstItem = items.shift()
console.log(items)

//İlk elemanı değiştirmek
items[0] = 100
console.log(items)

//Son elemanı değiştirmek
items[items.length-1] = 1000
console.log(items)