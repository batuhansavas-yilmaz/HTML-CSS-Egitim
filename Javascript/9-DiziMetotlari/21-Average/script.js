//average: number veri türü içerikli dizinin her elemanı üzerinde tek tek olmak üzere çalışır ve tüm elemanların ortalamasını bularak geriye döner.
Array.prototype.average = function () {
    var islem = 0;
    for (var i = 0; i < this.length; i++) {
        islem += this[i];
    }
    var sonuc = islem / this.length;
    return sonuc;
};

var sayi = [20, 55, 24, 42, 100, 95];
document.write(sayi + "<br>");

document.write(sayi.average());


