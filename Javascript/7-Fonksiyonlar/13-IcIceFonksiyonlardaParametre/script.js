function bir(a) {
    function iki(b) {
        function uc(c) {
            return a + b + c;
        }
        return uc;
    }
    return iki;
}

var toplam = bir(12)(2)(5);
document.write(toplam);
