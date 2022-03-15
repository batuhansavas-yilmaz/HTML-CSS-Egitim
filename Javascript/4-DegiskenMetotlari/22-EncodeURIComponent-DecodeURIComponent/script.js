//encodeURICompenent() : değişken içerisindeki metnin özel karakterlerini UTF-8 kodlamasına dönüştürerek geriye döndürür.

var deger = "&";
document.write(encodeURIComponent(deger) + "<br>");

//decodeURICompenent() : değişken içerisindeki metnin özel karakterlerini UTF-8 kodlamasına dönüştürülen karkateri normale çevirerek geriye döndürür.

var deger2 = "%26";
document.write(decodeURIComponent(deger2));