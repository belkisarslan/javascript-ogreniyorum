# Number veri ve İşlemler
Number veri türü, içerisinde sayısal değerleri tutmak için kullanılır. Tanımlama yaparken tırnak işareti kullanılmaz.

*Şimdi bir number veri türü tanımlaması yapalım.*

```javascript
   let age = 30;
```
Tanımladığımız number veri türüne arttırma ve azaltma işlemleri uygulayabiliriz.

Kullanıcı 5 yıl sonra kaç yaşında olacaktır?

*Gelin şimdi farklı yöntemlerle bu sorunun cevabına ulaşmaya çalışalım.*

```javascript
    age = age + 5;
    age += 5;
```

İki yöntem de bizi sonuca götürür ancak ikincisi daha çok tercih edilen bir yazma şeklidir. Aynı şekilde çıkartma, çarpma ve bölme işlemleri de yapabiliriz.

*Şimdi o işlemlere örnekler verelim.*

```javascript
   age = age - 2; 
   age -= 2; //tercih edilen yöntem

   age = age * 2
   age *= 2; //tercih edilen yöntem

   age = age / 2;
   age /= 2; //tercih edilen yöntem
```
Not: Tercih edilen yöntemler kural değildir, alışkanlıklarınıza göre değişiklik gösterebilir:)

*Şimdi mod alma işlemini görelim.*

Tabanına 16 tane kart yerleştirebildiğimiz oyun kutusuna 45 tane kart yerleştirmek istersek, kaç tane kart elimizde kalır?

```javascript
   console.log(45 % 16);
   13
```
Üst alma işlemi:
```javascript
   console.log(2*2*2);
   console.log(2**3);
```
İki şekilde de 8 sonucunu elde etmekteyiz.

*Şimdi de yuvarlama işlemlerini görelim.*

Aşağı yuvarlama:
```javascript
   console.log(Math.floor(2.7)); //Sonuç:2
```
Yukarı yuvarlama:
```javascript
   console.log(Math.ceil(2.7)); //Sonuç:3
```
Yakına yuvarlama:
```javascript
   console.log(Math.round(1.2)); //Sonuç:1
   console.log(Math.round(1.8)); //Sonuç:2
   console.log(Math.round(1.5)); //Sonuç:2
```
