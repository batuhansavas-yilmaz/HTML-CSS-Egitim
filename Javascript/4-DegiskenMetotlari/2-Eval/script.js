//eval() : kendisine parametre olarak verilen değerleri javascript kodlamasına çevirerek komut gibi çalıştırır ve oluşan değeri geriye döndürür.

var deger1 = 10;
var deger2 = 40;

var sonuc1 = "deger1 + deger2"; //string ifadedir. matematiksel işlem yapmaz
document.write(sonuc1 + "<br>");

var sonuc2 = eval("deger1 + deger2");
document.write(sonuc2 + "<br>");

var sonuc2 = eval("10 * 20");
document.write(sonuc2);