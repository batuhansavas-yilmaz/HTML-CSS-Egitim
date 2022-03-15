function tekrarla(baslangicDegeri) {
    if (baslangicDegeri <= 5) {
        document.write(baslangicDegeri + "<br>");
        baslangicDegeri++;
        tekrarla(baslangicDegeri);
    }else{
        return;
    }
}

tekrarla(1);
