# String Veri Türü
String, metinsel veri türüdür. Metinsel veriler üzerinde çeşitli çalışmalar yapabiliriz. 

*İlk olarak ifadenin karakter sayısını hesaplamakla başlayalım.*

Bu işlemi .length ile yapıyoruz.

```javascript
   let firstName = "Belkıs"
   let lastName = "Arslan"
   console.log(firstName.length); // sonuç:6
   console.log(lastName.length);  // sonuç:6
```

*Şimdi verinin ilk karakterine ulaşmaya çalışalım.*

```javascript
   console.log(firstName[0]); // çıktı: B
```
**Önemli Not :**
Karakter dizilerinin ilk karakteri 0'dan başlar.

*Şimdi soyadın bütün harflerini büyük harf yapalım.*

```javascript
   lastName = lastName.toUpperCase()
   console.log(lastName); // çıktı: ARSLAN
```
*String ifade içindeki bir karakterin yerini bulmaya çalışalım.*

```javascript
   //isim içindeki "l" harfinin yerini bulalım.
   console.log(firstName.search("l")); //sonuç: 2
```
----
**Önemli Uyarı :**
Çıkan -2- sonucu bizi asla şaşırtmamalı :) Çünkü daha önce öğrendik ki index bilgisi 1'den değil 0'dan başlar.

----

*Peki aradığımız karakter ifadenin içinde yoksa neyle karşılaşırız? Hemen deneyelim.*

```javascript
   console.log(firstName.search("x")); //sonuç: -1
```

*Şimdi başka bir alıştırma yapalım.*

```javascript
   firstName = "bugun"
   lastName = "ogrendiklerim"
   let email = "bugun@ogrendiklerim.com"
``` 
*emaildeki "@" karakterine ulaşmaya çalışalım.*

```javascript
   console.log(email.search("@")); // sonuç:5
```

*"@" karakterinden sonrasını almaya çalışalım.*

```javascript
   let domain = email.slice(email.search("@") + 1)
   console.log(domain) //sonuç: ogrendiklerim.com
```
*Peki ya "@" ile nokta arasını almak istersek? :)*

```javascript
   console.log(domain.slice(0, domain.indexOf("."))) //sonuç: ogrendiklerim
```

*Şimdi de başlangıç ve bitiş sorgusu yapalım.*

```javascript
   console.log(email.startsWith("bugun")) // true
   console.log(email.endsWith("org")) // false
```