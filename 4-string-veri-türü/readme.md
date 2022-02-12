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
