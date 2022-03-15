var kisi = function(){
    var fullname = "Ulaş Yılmaz";
    return{
        isimGetir:function(){
            return fullname;
        }
    }
}();

var sonuc = kisi.isimGetir();
document.write(sonuc);