// KURULUM NASIL YAPILIR ?
// Node.js kur. Kurduktan sonra terminale node -v yazarak sürümünü öğren.

// YORUM SATIRI NASIL YAPILIR ?
// Yorum satırı yapmanın iki yöntemi vardır.
// 1. Seçenek satır başına // yazarak tek bir satırı yorum satırı yapabiliriz.
// 2. Seçenek /* bu aralığın içerisine kodumuzu yazarak yapabiliriz. */
// 2. Seçenek ile birden fazla satırı yorum satırı içerisine alabiliriz.

// MERHABA DÜNYA YAZDIRMA ÖRNEKLERİ :
// Dökümana(document) Yazdırma İşlemi ile Merhaba Dünya:
// document.write('Merhaba Dünya');

// Uyarı Mesajı (Alert) ile Merhaba Dünya:
// alert("Merhaba Dünya") 

// console.log ile Merhaba Dünya:
// console.log("Merhaba Dünya") 

// SCOPE KAVRAMI :
// Kod içerisindeki objelerin, fonksiyonların erişilebilirlik kapsamı vardır, bu kapsama scope adı verilir.
// 3 ÇEŞİT SCOPE VARDIR BUNLAR :
// GLOBAL SCOPE // Tanımladığımı değişken süslü parantez içerisinde olmamalı ve böylelikle o değişkene her yerden erişebiliriz.
// FUNCTİON SCOPE // Tanımladığımız değişkeni fonksiyon içerisinde süslü parantezler içerisinde tanımlarsak o değişkene sadace süslü parantezlerin içerisinde ulaşabilirizç
// BLOCK SCOPE //  Tanımladığımız değişken if while for gibi metotların süslü parantezinin içerisinde ise block scope olur.

// DEĞİŞKEN NEDİR VE NASIL TANIMLANIR ?
// Değişken “isimlendirilmiş hafıza” olarak adlandırılır. Değişkenler ile kullanıcıları, ürünleri ve diğer tipteki bilgileri tutabiliriz.
// Değişken oluştururken let, const ve var kullanırız fakat var kullanımdan kalkmıştır.
// Var'ın kullanımdan kalkma sebebi kod içeriğimizde ki hataları spesifik olarak göstermemesidir.

// DEĞİŞKEN OLUŞTURMAK :
// let password = "1234";
// console.log(password)

// LET İLE OLUŞTURULAN DEĞİŞKENİN İÇERİĞİNİ SONRADAN DEĞİŞTİRMEK :
// let serverName = 'Barbaros'
// console.log(serverName)
// serverName = "https://kodluyoruz.org"
// console.log(serverName)

// LET İLE OLUŞTURULAN BOŞ DEĞİŞKENİ SONRADAN DOLDURMAK :
// let serverName;
// console.log(serverName)

// serverName = "https://kodluyoruz.org"
// console.log(serverName)

// DEĞİŞKEN DEĞERİMİZE BİRLEŞTİRME VEYA EKLEME İŞLEMİ :
// let fullName = 'Barbaros'
// console.log(fullName)

// fullName = fullName + ' Göçmen' // fullName ile eklemek istediğimiz değerin yerlerini değiştirebiliriz.
// console.log(fullName)

// CONST İLE DEĞİŞKEN TANIMLAMAK :
// const SERVER_PASSWORD = '12345'
// console.log(SERVER_PASSWORD)

// LET İLE DEĞİŞKEN TANIMLAMA KURALLARI :
// Let ile değişken tanımlarken camelCase yazım biçiminde değişken adımızı oluştururuz.

// CONST İLE DEĞİŞKEN TANIMLAMA KURALLARI :
// Const ile değişken tanımlarken UPPER_CASE yazım biçiminde değişken adımızı oluştururuz.

// DEĞİŞKENLERİ TEK BİR SATIRDA TANIMLAMA VE CONSOL.LOG() İLE YAZDIRMAK :
// let firstName = "Barbaros", lastName = "Göçmen"
// console.log(firstName, lastName)

// BOOLEAN VERİ TÜRÜ NEDİR VE NASIL KULLANILIR ?
// Boolean, true ve false değerleri temsil eden veri türüdür.
// Boolean veri türünü kullanırken değişken adımızın önünde is ve has ifadelerini kullanmaya dikkat etmeliyiz

// let isActive = true
// let hasPassword = false
// let isHandsome = true
// console.log(isActive,hasPassword,isHandsome)

// GENEL SYNTAX KURALLARI :
// Tek bir satırda yazdığımız kodun karakter uzunluğu maksimum 80 karakter olmalıdır bunun nedeni ise eski cihazların ekranında maksimum 80 karakterlik kod görüntülenebiliyor olmasından kaynaklıdır.

// STRİNG OLAN DEĞERİ NUMBER YAPMAK :
// let stringNumber = "26" // Bu kısımda string bir değer tanımlıyoruz.
// console.log(stringNumber) // Bu kısımda üstteki değişkenin içerisindeki string değeri consola yazdırıyoruz.
// let newNumber = Number(stringNumber) // Bu kısımda ise string değeri number'a çeviriyoruz.
// console.log(newNumber) // Bu kısımda ise string'den number'a dönüşmüş değeri consola yazdırıyoruz.
// console.log("Number Constractor içine bilgi gönderildi:", Number("111")) // Bu şekilde direkt console.log ile tek bir satırda string bir değeri number'a çevirip consola yazdırabiliyoruz.

// SAYI ARTTIRMA VE AZALTMA İŞLEMLERİ :
// let counter = 320 // Burada başlangıç sayımızı tanımladık.
// counter = counter + 1 // Burada başlangıç sayımıza 1 ekledik.
// counter += 1; // Burada elde ettiğimiz sayıya farklı bir yöntem ile 1 ekledik.
// counter ++; // Burada yine elde ettiğimiz sayıya farklı bir yöntem ile 1 ekledik.
// console.log(counter) // Burada sayımızın son halini consola yazdırdık.

// counter --; // Burada elde ettiğimiz sayının son halinde 1 çıkardık.
// counter -= 1; // Burada farklı bir yöntem ile en yine elde ettiğimiz sayıdan 1 çıkardık.
// console.log(counter) // Burada elde ettiğimiz son sayıyı consola yazdırdık.
// counter *= 10; // Burada elde ettiğimiz son sayıyı 10 ile çarptık.
// console.log(counter) // Burada elde ettiğimiz son sayıyı consola yazdırdık.

// counter /= 2; // Burada elde ettiğimiz son sayıyı 2 ile böldük.
// console.log(counter) Burada elde ettiğimiz son sayıyı consola yazdırdık.

// İŞLEM ÖNCELİĞİ :
// JavaScriptte de matematikte olduğu gibi işlem önceliği vardır.
// console.log( (2 + 3) * 10) // Burada ilk önce 2 ve 3'ü toplayıp sonrasında 10 ile çarpmasını sağladık ve consola yazdırdık.

// MOD (KALAN) ALMAK :
// Mod alarak bir sayının tekmi yoksa çiftmi olduğunu öğrenebiliriz.
// Sonucu 0 ise sayı çift 1 ise sayı tektir.
// console.log( 17 % 2) // Burada 17 sayısını 2'ye böldüğümüzde 1 kalıyor. Sonuç 1 çıktığına göre ise 17 sayımızın tek bir sayı olduğunu öğreniyoruz.

// ÜS ALMAK :
// console.log(2 * 2 * 2 * 2) bu işlem yerine console.log(2 ** 4) bu işlemi yaparak istediğimiz 2 üzeri 4 işleminin sonucuna kolayca ulaşabiliriz.

// SAYIYI AŞAĞI YUVARLAMA İŞLEMİ :
// console.log("Asagi Yuvarlama:", Math.floor(1.9) ) // Burada 1.9 sayısını Math.floor metodu ile aşağı yani 1'e yuvarladık.

// SAYIYI YUKARI YUVARLAMA İŞLEMİ :
// console.log("Yukari Yuvarlama:", Math.ceil(1.9) ) // Burada 1.9 sayısını Math.floor metodu ile yukarı yani 2'ye yuvarladık.

// SAYIYI YAKINA YUVARLAMA İŞLEMİ :
// console.log("Yakina Yuvarlama: ", Math.round(1.5) ) // Burada 1.5 sayısını Math.floor metodu ile yani 2'ye yuvarladık.

// BOOLEAN VERİ TÜRÜ İLE ÇALIŞMAK :
// let userName; // Burada userName adında bir değişken oluşturduk ve boş bıraktık.
// let isUserName = Boolean(userName) // Burada isUserName adında bir değişken oluşturup içerisinde değer olarak boolean şekilde userName değişkenini aldık.
// console.log(isUserName) // Consolda sonuç false olarak gözükecek çünkü aldığımız değer boş bir değer, userName değişkenini boş bırakmıştık.

// Boolean("11") // Burada değer true döner çünkü stringin içerisinde bir değer var.
// Boolean("0") // Burada değer true döner çünkü stringin içerisinde bir değer var.
// Boolean("") // Burada değer false döner çünkü stringin içerisinde bir değer yok.
// Boolean(0) //  Burada değer false döner çünkü numberin içerisinde bir değer yok.
// Boolean(-0) // Burada değer false döner çünkü numberin içerisinde bir değer yok.
// Boolean(-0.1) // Burada değer true döner çünkü numberin içerisinde bir değer var.
// Boolean(0 === 0) // Burada değer true döner çünkü bir nevi sıfır sıfıra eşit mi diye soru sorulmuş ve true yani eşit.

// VERİ TÜRÜNÜ ÖĞRENMEK :
// let price = 111 // Burada price adında bir değişken oluşturup içerisine number türünden 111 değerini veriyoruz.
// let stringPrice = "111" // Burada stringPrice adında bir değişken oluşturup içerisine string türünden 111 değerini veriyoruz.
// let hasPassword = true // Burada hasPassword adında bir değişken oluşturup içerisine boolean türünden true değerini veriyoruz.

// console.log(
//    "price: ",
//   typeof(price)
// ) // Burada consola price: 'price değerinin türü' yazdırıyoruz

// console.log(
//    "stringPrice: ",
//    typeof(stringPrice)
// ) // Burada consola stringPrice: 'StringPrice değerinin türü' yazdırıyoruz.

// console.log(
//    "hasPassword: ",
//    typeof(hasPassword)
// ) //  Burada consola hasPassword: 'hasPassword değerinin türü' yazdırıyoruz.

// NUMBER VERİ TİPİNİ STRİNG VERİ TİPİNE DÖNÜŞTÜRMEK :
// let number5 = 55 // Burada number5 adında bir değişken oluşturuyoruz ve içerisinde number veri türünden 55 değerini yazıyoruz.
// number5 = number5.toString() // Burada number5 adındaki değişkenimizi string türüne çevirip değişkenimizi güncelliyoruz.
// console.log(number5, typeof(number5)) // Burada ise değişkenimizin son halini consola yazdırıp yanında ise türünü yazdırıyoruz.

// TEMPLATE LİTERALS KULLANIMI :
// Template literals kod okunabilirliği ve yazım kolaylığı sağlayan ES6 ile gelmiş bir string yazma şeklidir.
// Template literals içerisinde iken fonksiyon kullanabiliriz, hesaplama yaptırtabiliriz ve birden fazla satır içerisinde kod yazabiliriz.
// Öncesinde tanımladığımzı değişkenleri template literals içerisinde ${} içerisinde yazmalıyız.
1
// let username = "hakan" // Burada username adlı değişken oluşturup içerisine string türünden hakan değerini verdik.
// const DOMAIN = "kodluyoruz.org" // Burada DOMAIN adlı değişken oluşturup içerisine string türünden kodluyoruz.org değerini verdik.
// let email = username + "@" + DOMAIN // Burada email adlı değişken oluşturup içerisinde diğer değişkenlerimizi birleştirme işlemi yaptık.
// console.log("Merhaba", username, "sitemize hosgeldin", "mail adresin:", email) // Burada ise tek normal bir şekilde consola değişkenlerimşizi ve ek olarak yazmak istediğimiz mesajları yazdık.

// let info = `
// Merhaba ${username} sitemize hosgeldin..
// mail adresin: ${email}
// mail adresinin uzunlugu: ${email.length} // Burada ${email.length} ile email değişkenimizin karakter uzunluğunu yazdırdık.
// borcunuz: ${(2 + 3) * 10} TL
// gunun saat bilgisi : ${new Date().getHours()} // Burada ${new Date().getHours()} saat üzerinden tarih bilgisi yazdırdık.
// kisa isminiz: ${username[0]}.` // Burada ${username[0]} ile username adlı değişkenimin sıfırıncı indeksini yani h harfini yazdırdık.
// Sonuç olarak ise template literals kullanarak birden fazla satırın içerisinde yazmak istediğimiz her şeyi yazdık ve ek olarak fonksiyon-hesaplama yaptırdık.
// console.log(info) // Burada ise info adlı değişkenimizi consola yazdırdık.

// STRİNG VERİ TÜRÜ İŞLEMLERİ :
// let email = "hakanyalcinkaya@gmail.com"
// let firstName = "hakan"
// let lastName = "YALCINKAYA

// console.log( email.length ) // Burada email değişkenimizin karakter sayısını yazdırıyoruz.

// console.log(firstName[0]) // Burada firstName değişkenimizin sıfırıncı indeksini yani h harfini yazdırıyoruz.
// console.log(firstName.charAt(0)) // 2.Yöntem.

// firstName = firstName.toUpperCase() // Burada firstName adlı değişkenimizi büyük harf yaparak güncelliyoruz.
// console.log(firstName) // Burada ise consola yazdırıyoruz.

// firstName = firstName.toLowerCase() // Burada firstName adlı değişkenimizi küçük harf yaparak güncelliyoruz.
// console.log(firstName) // Burada ise consola yazdırıyoruz.

// console.log(email.search("@")) // Burada email değişkenimizin içinde ki @ karakteri kaçıncı indekste onu yazdırıyoruz.
// console.log( email[15] ) // Burada ise yukarıda ki örneğin tam tersi şekilde email değişkenimizin 15. indeksinde hangi karakter var ise onu yazdırıyoruz.

// email.includes('@') // Burada email değişkenimizin içerisinde @ karakteri var mı yok mu onu öğreniyoruz ve consola sonuça göre boolean değer olarak true veya false yazdırıyoruz.

// DOM İÇERİSİNDE ÖĞE SEÇMEK VE DÜZENLEMEK :
// let title = document.getElementById('title') // Burada index sayfamızda h2 içerisinde yazılmış yazıya ulaşmak için let title adında bir değişken oluşturup document.getElementById('title') yazarak h2 içerisinde ki title id'li yazımıza ulaşıyoruz.
// title.innerHTML = "Degisen Bilgi" // Burada title değişkenini yani bir bakıma h2 içerisinde ki yazıyı değiştirerek güncelliyoruz.
// console.log(title.innerHTML) // Burada ise consola direkt h2 içerisinde ki yazımızı yazdırıyoruz.

// let link = document.querySelector("#kodluyoruzLink") // Burada index sayfamızda a href içerisinde id'si kodluyoruzLink olan yazımıza document.querySelector("#kodluyoruzLink") ile ulaşıyoruz
// link.innerHTML += " degisti" // Burada a href içerisinde ki yazımızın yanına degisti yazısını ekliyoruz.
// link.style.color = "red" // Burada linkimizin rengini değiştirerek kırmızı yapıyoruz.
// link.classList.add('btn') // Burada ise linkimize btn adında bir class ekliyoruz.

// PROMT İLE KULLANICIDAN BİLGİ ALMAK : 
// let name = prompt('Lütfen isminizi giriniz.') // Burada name adında bir değişken oluşturup içerisine prompt('Lütfen isminizi giriniz.') yazarak kullanıcıya soru soran bir alert ekranı oluşturuyoruz.
// let welcome = document.querySelector('#welcome') // Burada welcome adında bir değişken oluşturarak index sayfamızda ki welcome id'li yazıya ulaşıyoruz.
// welcome.innerHTML = `${welcome.innerHTML} <small style='color:red'>${name}</small>`// Burada ise welcome  id'li yazımızı kendisi ve small içerisinde kırmızı renkli bir şekilde kullanıcının girdiği yazı ile yanı name değişkeni ile birleştirip sayfaya yazdırıyoruz.

// LİSTE İÇERİSİNDEKİ İLK VEYA SON ELEMANA ULAŞMAK VE YENİ ELEMAN EKLEMEK :
// İlk olarak ul ile listemizi oluşturup bu il içerisine list adında id ekliyoruz sonrasında ise ul'nin içerisine li ile dilediğimiz kadar eleman oluşturuyoruz.
// let lastChild = document.querySelector("ul#list>li:last-child") // Burada lastChild adında değişken oluşturup document.querySelector("ul#list>li:last-child") ile list id li ul'nin içerisindeki last child'a ulaşıyoruz.
// lastChild.innerHTML = "son oge degisti..." // Burada lastChild yazımızı değiştiriyoruz.

// let firstChild = document.querySelector("ul#list>li:first-child") // Burada firstChild adında bir değişken oluşturup document.querySelector("ul#list>li:first-child") ile list id'li ul'nin içerisinde ki first child'a ulaşıyoruz.
// firstChild.innerHTML = "ilk oge degisti..." // Burada firstChild yazımızı değiştiriyoruz.

// let ulDOM = document.querySelector("ul#list") // Burada ulDOM adında bir değişken oluşturup içerisinde document.querySelector("ul#list") ile listemizin kendisine ulaşıyoruz.
// let liDOM = document.createElement('li') // Burada ise liDOM adında bir değişken oluşturup içerisine document.createElement('li') yazarak yeni bir eleman oluşturuyoruz.
// liDOM.innerHTML = "Kendi Olusturdugumuz Oge" // Oluşturduğumuz liDOM elemanının innerHTML'sine dilediğimiz metni giriyoruz.

// ulDOM.prepend(liDOM) // Burada ise istersek oluşturduğumzu elemanı prepend metodu ile listemizin en sonuna ekliyoruz.
// ulDOM.apend(liDOM) // Burada ise istersek oluşturduğumzu elemanı apend metodu ile listemizin en başına ekliyoruz.

// DOM ÖĞESİNE CLASS EKLEMEK VEYA SİLMEK :
// let greeting = document.querySelector("#greeting") // Burada greeting id'li öğemize ulaşıyoruz.
// greeting.classList.add("text-primary") // Burada greeting adlı öğemize text-primary adında class ekliyoruz.
// greeting.classList.add("title") // Burada greeting adlı öğemize title adında class ekliyoruz.
// greeting.classList.add("new-info", "second-class", "third-class") // Burada ise greeting adlı öğemize birden fazla class ekliyoruz.
// greeting.classList.remove("title", "second-class", "third-class") // Burada ise greeting adlı öğemizden birden fazla class siliyoruz.
// console.log(greeting.classList) // Burada ise greeting id'li öğemizin içerisinde ki class list bilgilerini consola yazdırarak görebiliyoruz.

// KARŞILAŞTIRMA OPERATÖRLERİ VE MANTIKSAL OPERATÖRLER :

// let price = "0" // Burada price adında bir değişken oluşturup string türünde 0 değerini verdik.
// let user = "barbaros" // // Burada user adında bir değişken oluşturup string türünde barbaros değerini verdik.

// == Eşitse anlamına gelen ifade
// console.log("== :", price == 1 )
// console.log("== :", price == 100 )

// === Hem değeri hem de türü eşitse
// console.log("=== :", price === 1 )
// console.log("=== :", price === 100 )

// != Eşit değilse anlamına gelen ifade
// console.log(user != "guest" )

// < Küçükse anlamına gelen ifade
// console.log("price < 100", price < 100)

// <= Küçük veya eşitse anlamıan gelen ifade
//console.log("price <= 100", price <= 100)

// > Büyükse anlamına gelen ifade
//console.log("price > 200", price > 200)

// >= Büyük veya eşitse anlamına gelen ifade
//console.log("price >= 100", price >= 100)

// && ve anlamına gelen ifade // İki seçenekte doğru olmalı
// price = 0
//console.log( price > 0 && user != "guest" )

// || veya anlamına gelen ifade // İki seçenekten en az biri doğru olmalı
// console.log( price > 0 || user != "guest" )

// ! degil (tersi) anlamına gelen ifade // aşağıda ki örnekte user guest değerine eşit değildir anlamına gelerek kullanılmış.
// user = "guest"
// price = 1
// console.log( price > 0 && !user == "guest" )

// KOŞULLARLA ÇALIŞMAK - İF ELSE :

// let username = prompt("Kullanici Adinizi Giriniz:") // Burada username adında bir değişken oluşturup kullanıcıdan kullanıcı adını yazmasını istedik.

// if (username.length > 0) { // Burada ise eğer username içerisine girilen bilginin karakter uzunluğu 0'dan büyükse dedik.
//    console.log(`Kullanıcı adınız: ${username} `) // İçerisine Kullanıcı adınız: Girilen Kullanıcı adını yazdır dedik.  
// } else { // Burada ise eğer değilse, yani girilen karakter sayısı sıfırdan küçükse dedik.
//    console.log('Kullanıcı adınızı girmediniz.') // Bu seferde sonuç olarak Kullanıcı adı girmediniz yazdır dedik.   
// }

// if (username) {  // İf kısmı her zaman true ise çalışır. // İkinci ve daha kısa yöntem.
// console.log(`Kullanici Bilginiz ${username}`)
// } else {
//    console.log("bilgi yok")
// }

// ÇOKLU KOŞUL YAPISI - İF ELSE İF KULLANIMI :
// let userName = prompt("Kullanici Adiniz:")
// let age = prompt("Yasiniz:")
// let info = document.querySelector("#info")

// if (userName && age >= 18) {
//    info.innerHTML = "ehliyet alabilirsiniz"
// } else if (!userName) {
//    info.innerHTML = "Kullanici Adiniz Yok"
// } else if ( !(age >= 18) ) {
//    info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
// }

// TERNARY OPERATÖR İLE SHORT İF KULLANIMI :
// let userName = prompt("Kullanici Bilginiz Yaziniz") // Burada userName adında değişken oluşturup kullanıcının kullanıcı bilgisini yazmasını istedik.
// let info = document.querySelector("#info") // Burada let info adında bir değişken oluşturuğ info id'li indexte ki öğemize ulaştık

// Koşul doğru ise ? işaretini, koşul yanlış işe : işaretini kullanırız.
// info.innerHTML = `${userName ? userName : "Kullani Bilginiz Bulunamadi :("}` // Burada ise infonun innerHTML'sine ulaşıp userName dolu ise kendisini yazdırmasını dolu değil ise Kullani Bilginiz Bulunamadi :( yazdırmasını istedik.

// FONKSİYON TANIMLAMAK :
// function helloWorld() { 
//     console.log("Hello World")
// }

// function hello() {
//    console.log("Merhaba")
//    helloWorld()
// }

// hello() 

// Yukarıda ki örnekte ilk olarak helloWorld adında bir fonksiyon oluşturduk ve içerisine consola Hello World yazmasını istedik sonra sonda ise hello adında bir fonksiyon oluşturduk ve içerisine ilk olarak consola merhaba yazmasını sonrasında ise helloWorld fonksiyonunu çalıştırmasını istedik. En son olarak ise hello() ile hello fonksiyonumuzu çalıştırdık ve ilk olarak consola merhaba yazdı sonrasında ise helloWorld fonksinonunu da içinde bulundurduğundan onu çalıştırarak conssola Hello Wordl yazdı.







































































