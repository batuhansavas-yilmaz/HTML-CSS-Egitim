//isFinite: Kendisine parametrik olarak verilen değişkenin en büyük pozitif sayı ile en küçük negatif sayı aralığında olup olmadığını kontrol ediyor.

var deger = 100;
var deger2 = 10.22;
var deger3 = Number.MAX_VALUE * 2;
var sonuc = Number.isFinite(deger);
var sonuc2 = Number.isFinite(deger2);
var sonuc3 = Number.isFinite(deger3);

document.write(sonuc + "<br>");
document.write(sonuc2 + "<br>");
document.write(sonuc3 + "<br>");