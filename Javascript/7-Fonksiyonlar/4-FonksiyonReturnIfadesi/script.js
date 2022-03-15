function demo(){
    return "Ulaş";
}

var isim = demo();

document.write(isim);

/* veya */

var text = function(){
    return "Ulaş";
}

var isim2 = text();

document.write(isim2);

/* çoklu ifade gönderimi */
var text2 = function(){
    var name = "Ulaş";
    var surname = "Yılmaz";
    var coklu = [name,surname];
    return coklu;
}

var isim3 = text2();

document.write(isim3);