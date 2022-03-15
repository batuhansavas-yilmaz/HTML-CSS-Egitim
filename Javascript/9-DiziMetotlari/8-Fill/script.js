//fill: kendisine verilecek olan parametreler ile tanımlanmış dizi aralığında bulunan değeri parametre ile belirtmiş olan değer doğrultusunda dizinin elemanlarını değiştirir.

var renk = ["Sarı", "Kırmızı", "Beyaz", "Siyah", "Mavi", "Yeşil"];
document.write(renk + "<br>");

renk.fill("pembe",1,4);
document.write(renk + "<br>");