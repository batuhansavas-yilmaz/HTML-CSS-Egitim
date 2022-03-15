//arguments: fonksiyona herhangi bir parametre tanımlanmadan bile gelebilecek tüm parametre değerlerinin alınmasını sağlar

function ornek() {
    for (var i = 0; i < arguments.length; i++) {
        document.write(arguments[i] + "<br>");
    }
}

ornek("Ulaş", "Yılmaz");
