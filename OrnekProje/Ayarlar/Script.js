
$(document).ready(function () {

    /* ufak cihazlar için menü açma butonunun işlemleri*/
    $("#HeaderMenuAcmaButonuAlani").on("click", function () {
        $("#HeaderMenuAcmaButonuMenuSinirlamaAlani").slideToggle("show");
    });
    /* ufak cihazlar için menü açma butonunun işlemleri*/




    /*main ve footer alanı için üstten boşluk hesaplamaları*/
    var DokumanGenisligi = $(window).outerWidth();

    if ($(!"#HeaderMesajAlani").length) {

        if (DokumanGenisligi >= 1200) {/*XL*/
            var OffsetDegeri = 108;
        } else if (DokumanGenisligi >= 992 && DokumanGenisligi <= 1199) {/*L*/
            var OffsetDegeri = 98;

        } else if (DokumanGenisligi >= 768 && DokumanGenisligi <= 991) {/*M*/
            var OffsetDegeri = 78;

        } else if (DokumanGenisligi >= 576 && DokumanGenisligi <= 767) {/*S*/
            var OffsetDegeri = 68;

        } else if (DokumanGenisligi <= 574) {/*XS*/
            var OffsetDegeri = 63;
        }

    } else {
        if (DokumanGenisligi >= 1200) {/*XL*/
            var OffsetDegeri = 148;
        } else if (DokumanGenisligi >= 992 && DokumanGenisligi <= 1199) {/*L*/
            var OffsetDegeri = 138;

        } else if (DokumanGenisligi >= 768 && DokumanGenisligi <= 991) {/*M*/
            var OffsetDegeri = 118;

        } else if (DokumanGenisligi >= 576 && DokumanGenisligi <= 767) {/*S*/
            var OffsetDegeri = 108;

        } else if (DokumanGenisligi <= 574) {/*XS*/
            var OffsetDegeri = 103;

        }

    }
    $("main").css("top",OffsetDegeri);
    $("footer").css("top",OffsetDegeri);
    $(window).resize(function(){
        var DokumanGenisligi = $(window).outerWidth();

    if ($(!"#HeaderMesajAlani").length) {

        if (DokumanGenisligi >= 1200) {/*XL*/
            var OffsetDegeri = 108;
        } else if (DokumanGenisligi >= 992 && DokumanGenisligi <= 1199) {/*L*/
            var OffsetDegeri = 98;

        } else if (DokumanGenisligi >= 768 && DokumanGenisligi <= 991) {/*M*/
            var OffsetDegeri = 78;

        } else if (DokumanGenisligi >= 576 && DokumanGenisligi <= 767) {/*S*/
            var OffsetDegeri = 68;

        } else if (DokumanGenisligi <= 574) {/*XS*/
            var OffsetDegeri = 63;
        }

    } else {
        if (DokumanGenisligi >= 1200) {/*XL*/
            var OffsetDegeri = 148;
        } else if (DokumanGenisligi >= 992 && DokumanGenisligi <= 1199) {/*L*/
            var OffsetDegeri = 138;

        } else if (DokumanGenisligi >= 768 && DokumanGenisligi <= 991) {/*M*/
            var OffsetDegeri = 118;

        } else if (DokumanGenisligi >= 576 && DokumanGenisligi <= 767) {/*S*/
            var OffsetDegeri = 108;

        } else if (DokumanGenisligi <= 574) {/*XS*/
            var OffsetDegeri = 103;

        }

    }
    $("main").css("top",OffsetDegeri);
    $("footer").css("top",OffsetDegeri);
    });
    /*main ve footer alanı için üstten boşluk hesaplamaları*/




});




