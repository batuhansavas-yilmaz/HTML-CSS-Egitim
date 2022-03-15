//join: dizideki elemanların arasına kendisine parametre olarak verilen değeri ayraç olarak kullanarak string veri türünde bir metin oluşturur.

var renk = ["Sarı", "Kırmızı", "Beyaz", "Siyah", "Mavi", "Yeşil"];
document.write(renk + "<br>");

var metin = renk.join(" ");
document.write(metin + "<br>");
document.write(Array.isArray(metin) + "<br>");