//encodeURI() : değişken içerisindeki metnin özel karakterlerini UTF-8 kodlamasına dönüştürerek geri döndürür.

//decodeURI() : değişken içerisindeki metnin özel karakterlerini UTF-8 kodlamasına dönüştürülmüş karakterleri çözerek geri döndürür.

//kodlamaya dahil edilmeyen karakterler rakamlar, ingilizce harfler ve özel karakterler.

var deger = "https://www.pıxofty.com/";
document.write(deger + "<br>");

var sonuc = encodeURI(deger);
document.write(sonuc + "<br>");

var sonuc2 = decodeURI(sonuc);
document.write(sonuc2);