//reverse: dizi içerisindeki sıralamayı tersine çevirir.
//sort: dizi içerisindeki elemanları sıralar.unicode olarak sıralar. normal sıralama için fonksiyon kullanılır
function sirala(a,b){
    return a-b;
}

var renk = ["Sarı","Kırmızı","Siyah","Beyaz","Mavi","Pembe","Mor","Lacivert"];
var sayi = [1,2,4,8,22,9,13,47,21];

document.write(renk + "<br>");
document.write(sayi + "<br>");
document.write("----------------------Ters----------------------- <br>");
document.write(renk.reverse() + "<br>");
document.write(sayi.reverse() + "<br>");
document.write("----------------------Sıralanmış----------------------- <br>");
document.write(renk.sort() + " - unicode <br>");
document.write(renk.sort(sirala) + " - normal <br>");
document.write(sayi.sort() + " - unicode <br>");
document.write(sayi.sort(sirala) + " - normal <br>");