//splice: diziden elaman veya elemanlar siler ve geri döndürür. Ayrıca elaman eklemeside yapar.

var isim = ["Ulaş", "Gülhan", "Yiğit", "isim"];
document.write(isim + "<br>");
var sonuc = isim.splice(2,2);
document.write(isim + "<br>");
document.write(sonuc + "<br>");

//ekleme
var isim2 = ["Ulaş", "Gülhan", "Yiğit", "isim"];
document.write(isim2 + "<br>");
var sonuc2 = isim2.splice(4,1,"Deneme");
document.write(isim2 + "<br>");
document.write(sonuc2 + "<br>");