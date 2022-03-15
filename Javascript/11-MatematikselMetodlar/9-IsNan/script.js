//isNaN: kendisine parametrik olarak verilen değişkenin içeriğini NaN değerinde olup olmadığını kontrol ederek boolean olarak geri döndürür.

var sayi = "a";
var sayi2 = 5;

document.write(isNaN(sayi) + "<br>"); //Sayı değil = true;
document.write(isNaN(sayi2) + "<br>"); //Sayı değil = false;