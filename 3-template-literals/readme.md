# Template Literals

Template Literals, çok satırlı dizeleri birleştirmek ve dize gömmek için kullanılan bir yöntemdir. Tek tırnak ya da çift tırnak yerine backtick kullanılır.

*Şimdi önce eski yöntemle ardından backtick yöntemiyle bir örnek yapalım.*

```javascript
   let fullName = "belkisarslan"
   let userName = "blks"
   console.log("Sayın", fullName, "sitemize hoş geldiniz","kullanıcı adınız:", userName)
```
Çıktımız şu şekilde olacaktır.

```
Sayın belkisarslan sitemize hoş geldiniz kullanıcı adınız blks
```

Bu kullanımda virgüller ve tırnak işaretleri oldukça karışık bir görünüm sergilemekte, öyle değil mi?

*Şimdi bir de backtick yöntemini deneyimleyelim.*

```javascript
   let info = `Sayın ${fullName} sitemize hoş geldiniz.
   Kullanıcı adınız: ${userName}
   `
   console.log(info)
```
Çıktımız yine aynı şekilde olacaktır.

```
Sayın belkisarslan sitemize hoş geldiniz.Kullanıcı adınız: blks
```
