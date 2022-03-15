//string: değişken içeriğini mutlak olarak string veri türüne çevirerek oluşturduğu değeri geri döndürür.

var bir = 10;
var iki = 7.57;
var uc = true;

var turBir = String(bir);
var turIki = String(iki);
var turUc = String(uc);

document.write(typeof turBir + ": " + turBir + "<br>");
document.write(typeof turIki + ": " + turIki + "<br>");
document.write(typeof turUc + ": " + turUc + "<br>");