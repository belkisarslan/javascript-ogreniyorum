# Local Storage

Local Storage, verilerde yapılan değişikliklerin kaydının tutulmasıdır.

*Küçük bir örnekle görelim.*

```javascript
   localStorage.setItem("number",11)
```

Veriler key ve value olarak kaydedilir.

<img src="img1.png">

*Peki kaydettiğimiz veriyi çağırmak istersek?*

```javascript
   localStorage.getItem("number")
```
<img src="img2.png">

<hr>

*Şimdi bir liste örneği yapalım.*

```javascript
   let user = "kullanıcı"
   let items = [1,2,3,user]
   console.log(items)
```
<img src="img3.png">

Verilerimizi console üzerinde bu şekilde görebiliyoruz.

*Şimdi local storage olarak kaydedelim.*

<img src="img4.png">







