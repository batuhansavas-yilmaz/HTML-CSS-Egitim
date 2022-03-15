//toExponential: kendisine parametre olarak verilen değişkenin ondalık hanesinin kaç basamak olacağını belirterek kalan değerin üstel hale getirir.

var deger = 10.456214;
document.write(deger + "<br>");

var sonuc = deger.toExponential(3);
document.write(sonuc + "<br>");