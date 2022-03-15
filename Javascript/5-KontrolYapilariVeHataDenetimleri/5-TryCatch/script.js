try {
    var isim = "Ulaş";
    document.write(isim + "<br>");
    document.write(soyisim);
} catch (error) {
    document.write("Hatalı işlem" + "<br>");
    document.write(error + "<br>");
}finally {
    document.write("Bu kısım hata olsada olmasada çalışır.");
}