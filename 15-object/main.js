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



