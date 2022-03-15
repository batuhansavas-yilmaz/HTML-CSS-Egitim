var renkler = ["sarı", "kırmızı", "siyah"];
var isimler = ["ulaş", "gülhan", "yiğit", "emine"];

var sonuc = [renkler, isimler];
//veya
var sonuc2 = [
    ["sarı", "kırmızı", "siyah"],
    ["ulaş", "gülhan", "yiğit", "emine"],
];

document.write(sonuc + "<br>");
document.write(sonuc[0] + "<br>");
document.write(sonuc[0][1] + "<br>");
document.write(sonuc[1] + "<br>");
document.write(sonuc2 + "<br>");
