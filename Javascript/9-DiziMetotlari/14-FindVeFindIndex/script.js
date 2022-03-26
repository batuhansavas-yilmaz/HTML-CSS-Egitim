//find: kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerinde tek tek olmak üzere çalıştırır ve dizi içerisinde parametrik olarak verilen değeri arar. İlk eşleşmeyi sağlayan değeri geriye döner.

function deneme(eleman, index, referans) {
    return index == 6;
}

var sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
document.write(sayilar + "<br>");

var bulunan = sayilar.find(deneme);
document.write(bulunan + "<br>");


//findIndex: kendisine parametre olarak verilen fonksiyonu dizideki her eleman üzerinde tek tek olmak üzere çalıştırır ve dizi içerisinde parametrik olarak verilen değeri arar. İlk eşleşmeyi sağlayan değerin indexini geriye döner.

function deneme2(eleman, index, referans) {
    return eleman == "Yiğit";
}

var isimler = ["Ulaş", "Gülhan", "Yiğit"];
document.write(isimler + "<br>");

var bulunan2 = isimler.findIndex(deneme2);
document.write(bulunan2 + "<br>");