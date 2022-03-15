//match() : kendisine parametre olarak verilen değer doğrultusunda değişken içeriğini kontrol eder ve eşleşen değer varsa içeriğin eşleşen kısmından yeni bir içerik oluşturur ve geriye değer döndürür.

//g : düzenli ifade
//i : harf duyarlılığı

var metin = "Ulaş Yılmaz Javascript - Yiğit Yılmaz Javascript";
document.write(metin.match("Yılmaz") + "<br>");

var metin = "Ulaş Yılmaz Javascript - Yiğit Yılmaz Javascript";
document.write(metin.match(/Yılmaz/g) + "<br>");

var metin = "Ulaş yılmaz Javascript - Yiğit Yılmaz Javascript";
document.write(metin.match(/Yılmaz/i) + "<br>");

var metin = "Ulaş yılmaz Javascript - Yiğit Yılmaz Javascript";
document.write(metin.match(/Yılmaz/gi) + "<br>");