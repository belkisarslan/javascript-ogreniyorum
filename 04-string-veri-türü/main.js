let firstName = "Belkıs"
let lastName = "Arslan"

//karakter sayısı bulma
console.log(firstName.length);
console.log(lastName.length);

//ilk karakteri bulma
console.log(firstName[0]);

//büyük harf yapma
lastName = lastName.toUpperCase()
console.log(lastName);

//karakterin yerini bulma
//isimdeki "l" harfinin yerini bulalım.
console.log(firstName.search("l"));

//olmayan karakter bulma
console.log(firstName.search("x"));

firstName = "bugun"
lastName = "ogrendiklerim"
let email = "bugun@ogrendiklerim.com"
console.log(firstName, lastName, email)

// "@" karakterinin yerini bulalım.
console.log(email.search("@"))

// "@" karakterinden sonrasını alalım.
let domain = email.slice(email.search("@") + 1)
console.log(domain)

// "@" ile nokta arasını alalım.
console.log(domain.slice(0, domain.indexOf(".")))

//başlangıç ve bitiş sorgusu
console.log(email.startsWith("bugun"))
console.log(email.endsWith("org"))