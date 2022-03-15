//shuffle: dizinin her elemanı üzerinde çalışarak tüm elemanları karıştırır.
Array.prototype.shuffle = function () {
    var elemanSayisi = this.length;
    while (--elemanSayisi > 0) {
        var rastgele = Math.floor(Math.random() * (elemanSayisi + 1));
        var gecici = this[rastgele];
        this[rastgele] = this[elemanSayisi];
        this[elemanSayisi] = gecici;
        return this;
    }
}

var isim = ["Ulaş", "Gülhan", "Yiğit"];
document.write(isim + "<br>");

var karistir = isim.shuffle();
document.write(karistir + "<br>");