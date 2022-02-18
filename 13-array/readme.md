# Array

Birden fazla veriye tek bir değişken altında erişebilmek için array kullanırız.

*Şimdi bir array oluşturalım.*

```javascript
   let user = "kullanıcı"
   let isActive = false
   let items = [20,30,40, isActive, user]
   console.log(items)
```
Çıktımız aşağıdaki gibi olacaktır. isActive ve user tanımlamalarının içlerindeki değerlerin geldiğine dikkat edelim.

```
 [20, 30, 40, false, 'kullanıcı']
```
Dizimizin içinde kaç tane öge olduğunu öğrenmek istersek;

```javascript
   console.log(items.length) //sonuç: 5
```

Dizinin ilk elemanını görmek istersek;
```javascript
   console.log(items[0]) //sonuç: 20
```
**! Unutmuyoruz :** index numaraları 1'den değil, 0'dan başlar.

Dizinin son elemanı:
```javascript
   console.log(items[items.length-1]) //sonuç: kullanıcı
```

Dizinin sonuna eleman eklemek:
```javascript
   items.push(50)
   console.log(items)
```
```javascript
 [20, 30, 40, false, 'kullanıcı', 50]
```

Dizinin başına eleman eklemek:
```javascript
   items.unshift(10)
   console.log(items)
```
```javascript
 [10, 20, 30, 40, false, 'kullanıcı', 50]
```

Dizinin sonundaki elemanı çıkarmak:
```javascript
   let lastItem = items.pop()
   console.log(items)
```
```javascript
  [10, 20, 30, 40, false, 'kullanıcı']
```

Dizinin başındaki elemanı çıkarmak:
```javascript
   let firstItem = items.shift()
   console.log(items)
```
```javascript
  [20, 30, 40, false, 'kullanıcı']
```
 
Dizinin ilk elemanını değiştirmek:
```javascript
   items[0] = 100
   console.log(items)
```
```javascript
  [100, 30, 40, false, 'kullanıcı']
```

Dizinin son elemanını değiştirmek:
```javascript
   items[items.length-1] = 1000
   console.log(items)
```
```javascript
  [100, 30, 40, false, 1000]
```

