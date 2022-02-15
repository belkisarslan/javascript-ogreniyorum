# Karşılaştırma ve Mantıksal Operatörler

Değerleri karşılaştırmak için büyüklük, küçüklük ve eşitlik gibi operatörler kullanılır.

*Gelin örneklerle bu konuları öğrenelim.*

```javascript
   let price = 100;
   console.log(price == 1) // sonuç: false
   console.log(price == 100) // sonuç: true
```

*Şimdi hem eşitlik hem de tür kontrolü yapalım.*

```javascript
   let piece = "55"
   console.log(piece === 1) // sonuç: false
   console.log(piece === 55) // sonuç: false
```
*Peki 55 olduğu halde neden sonuç false çıktı?*

Çünkü 55 tanımlamasını string veri türü olarak kaydettik. Tür karşılaştırması yaparken ise number olarak sorduk. 

Eğer,

```javascript
   console.log(piece === "55") //true
```
şeklinde sorgu yapsaydık true cevabını alırdık.

Şu şekilde tür kontrolü yapabiliriz:
```javascript
   console.log(typeof piece) //string
   console.log(typeof price) //number
```

*Şimdi küçükse, büyükse, küçük eşitse ve büyük eşitse sorgularını yapalım.*

```javascript
   console.log(price < 100) //false
   console.log(price > 100) //false
   console.log(price <= 100) //true
   console.log(price <= 100) //true
```

*&& ve || veya sorgusu*

```javascript
   console.log(price>100 && piece != 100) //false
   console.log(price>=100 && piece != 100) //true
```

*! Ters sorgu*

```javascript
   console.log(!price === 100) //false
```
