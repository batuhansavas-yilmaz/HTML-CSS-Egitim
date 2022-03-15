//concat: üzerinde çalışılan diziye parametrik olarak verilen eleman veya elemanları yada dizi veya dizileri dahil ederek yeni bir dizi oluşturur.

var renk = ["Sarı", "Kırmızı", "Beyaz", "Siyah", "Mavi", "Yeşil"];
var isim = ["ulaş", "gülhan", "yiğit"];
document.write(renk + "<br>");
document.write(isim + "<br>");

var kopya = renk.concat(isim);
document.write(kopya + "<br>");

var kopya2 = renk.concat(isim[2]);
document.write(kopya2 + "<br>");
