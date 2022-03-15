//ValueOf() : üzerinde çalışılan değişken değerinin tam anlamıyla aktarımını sağlayarak yeni bir içerik oluşturur ve geriye döndürür.

var deger1 = "5";
var deger2 = 5;

document.write(typeof deger1 + "<br>");
document.write(typeof deger2 + "<br>");

var sonuc1 = deger1.valueOf();
var sonuc2 = deger2.valueOf();

document.write(typeof sonuc1 + "<br>");
document.write(typeof sonuc2 + "<br>");
