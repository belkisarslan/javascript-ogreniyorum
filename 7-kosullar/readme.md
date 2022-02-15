# Koşullar

Yapacağımız işlem bazı koşullara bağlıysa if else bloklarını kullanırız.

```javascript
   let time = 19
   if( time <= 11 ){
    console.log("günaydın :)")
   }else if(time <= 17){
    console.log("iyi günler")
   }else if(time >= 18){
    console.log("iyi akşamlar")
   }
```
*Başka bir örnek yapalım.*

```javascript
   let userName = prompt('Kullanıcı adı giriniz')
   let info = document.querySelector('.p')
   info.innerHTML = `${userName ? userName : "Kullanıcı bilgisi girmediniz"}` 
```
*Sınav puan durumu egzersizi yapalım.*

```javascript
   
   let exam = prompt("Puanı giriniz")
   let textInfo;

    if(exam >=0 && exam<= 100){
        if(exam >= 90){
            textInfo = "AA"
        }else if(exam >= 85){
            textInfo ="BA"
        }else if(exam >= 80){
            textInfo ="BB"
        }else if(exam >= 75){
            textInfo ="CB"
        }else if(exam >= 70){
            textInfo ="CC"
        }else if(exam >= 65){
            textInfo ="DC"
        }else if(exam >= 60){
            textInfo ="DD"
        }else if(exam >= 50){
            textInfo ="FD"
        }else if(exam < 50){
            textInfo ="FF"
        }
    }else{
        textInfo = "Bilgiler doğru değil"
    }

 let info = document.querySelector('.p')
 info.innerHTML = ` ${exam} => ${textInfo} `

```
İçerikler için Kodluyoruz YouTube kanalına teşekkürler :)

Ulaşmak isteyenler için => https://www.youtube.com/c/Kodluyoruz


