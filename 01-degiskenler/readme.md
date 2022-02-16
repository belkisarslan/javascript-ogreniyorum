# Değişkenler
Değişken tanımlamak için **let** ve **const** komutlarını kullanıyoruz.
<br>
*Şimdi ilk tanımlamamızı yapalım.*
```javascript
   let userName = "belkisarslan"
   console.log(userName);
```
<br>
Önce değişkene veri atanır, ardından console.log a yazdırılır. Peki tam tersini yapmış olsaydık, ne olurdu?
<br>

*Deneyelim*

```javascript
   console.log(fullName);
   let fullName = "Belkıs Arslan"
```
Şu şekilde bir hata alırdık.

```
Uncaught ReferenceError: Cannot access 'fullName' before initialization
```
**let** ile yaptığımız tanımlamaları değiştirebilir ya da o tanımlamalara eklemeler yapabiliriz.

*Hadi deneyelim.*

```javascript
   let inform = "Güncelleme yapılamadı."
   inform = "Güncellendi"
   inform += " ve yayınlandı."
   console.log(inform);
```
Yazdığımız kod parçacığının çıktısı şu şekilde olacaktır:
```
Güncellendi ve yayınlandı.
```
**const** ile yaptığımız tanımlamalar ise değiştirilemez.

*Şimdi bir şifre tanımlaması yapalım ve onu değiştirmeye çalışalım.*

```javascript
   const password = "asdasdas"
   console.log(password);
   password = "xdxdxdxd"
   console.log(password);
```
Şu şekilde bir hata alırız.

```
Uncaught TypeError: Assignment to constant variable.
```
## Özetlersek
--------------
1. **let** tanımlamaları değiştirilebilir.
2. **const** tanımlamaları değiştirilemez.

## Tanımlama Kuralları
----------------------
1. Büyük harf küçük harf duyarlılığı vardır.
2. Değişken isimleri arasında boşluk bırakılmaz.
3. Komut isimleriyle tanımlama yapılamaz.
4. Değişken isimleri sayı ile başlayamaz.

Sonraki derste görüşmek üzere...
