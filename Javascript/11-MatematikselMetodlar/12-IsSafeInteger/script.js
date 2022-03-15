//isSafeInteger: kendisine parametre olarak verilen değişkenin güveni bir tam sayı olup olmadığını kontrol eder.

var sayi = 5;
var sayi2 = 5.5;
var isim = "Yiğit";

document.write(Number.isSafeInteger(sayi) + "<br>");
document.write(Number.isSafeInteger(sayi2) + "<br>");
document.write(Number.isSafeInteger(isim) + "<br>");