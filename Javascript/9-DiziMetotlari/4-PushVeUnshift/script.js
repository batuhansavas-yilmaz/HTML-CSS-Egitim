//push: dizinin sonuna eleman veya elemanlar ekler

var isim = ["Ulaş", "Gülhan"];
document.write(isim + "<br>");
var sonuc = isim.push("Yiğit");
document.write(isim + "<br>");
document.write(sonuc + "<br>");

//unshift: dizinin başına eleman ekler

var isim2 = ["Gülhan", "Yiğit"];
document.write(isim2 + "<br>");
var sonuc2 = isim2.unshift("Ulaş");
document.write(isim2 + "<br>");
document.write(sonuc2 + "<br>");