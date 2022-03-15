//copyWithin: kendisine verilecek olan parametreler ile tanımlanmış dizi aralığında bulunan değerleri kopyalayarak parametreler doğrultusunda dizinin elemanşarını değiştirir.

var renk = ["Sarı", "Kırmızı", "Beyaz", "Siyah", "Mavi", "Yeşil"];
document.write(renk + "<br>");

var kopya = renk.copyWithin();
document.write(kopya + "<br>");

var kopya2 = renk.copyWithin(3);
document.write(kopya2 + "<br>");

var kopya3 = renk.copyWithin(2,4);
document.write(kopya3 + "<br>");