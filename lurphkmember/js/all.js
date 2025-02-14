$(document).ready(function () {
    // 左側popup
    // $(window).scroll(function() {
    //     $('.left_popup').addClass('hide');
    // });
    // $('.left_popup').click(function (e) {
    //     $('.left_popup').toggleClass('hide');
    // });
    // $('.left_popup_event').click(function (e) {
    //     e.preventDefault();
    //     $('html , body').animate({
    //         scrollTop: $('#event').offset().top,
    //     }, 900);
    // });
    // $('.left_popup_offer').click(function (e) {
    //     e.preventDefault();
    //     $('html , body').animate({
    //         scrollTop: $('#offer').offset().top,
    //     }, 900);
    // });

    var edmhref = location.href;
    if (edmhref.includes("#news")) {
        $("#news").show();
        $(".news_animate").removeClass("animate__animated");
    }
    if (edmhref.includes("#summer")) {
        $("#summer").show();
        // $(".lu-ldg").addClass('lu-ldg-hide');
        $('html , body').animate({
            scrollTop: $('#summer').offset().top - 70,
        }, 900);
    }
    if (edmhref.includes("#pose")) {
        $("#pose").show();
        // $(".lu-ldg").addClass('lu-ldg-hide');
        $('html , body').animate({
            scrollTop: $('#pose').offset().top - 70,
        }, 900);
    }
    if (edmhref.includes("#food")) {
        $("#food").show();
        // $(".lu-ldg").addClass('lu-ldg-hide');
        $('html , body').animate({
            scrollTop: $('#food').offset().top - 70,
        }, 900);
    }
    if (edmhref.includes("#replace")) {
        $("#replace").show();
        // $(".lu-ldg").addClass('lu-ldg-hide');
        $('html , body').animate({
            scrollTop: $('#replace').offset().top - 70,
        }, 900);
    }
    if (edmhref.includes("#massage")) {
        $("#massage").show();
        // $(".lu-ldg").addClass('lu-ldg-hide');
        $('html , body').animate({
            scrollTop: $('#massage').offset().top - 70,
        }, 900);
    }
    if (edmhref.includes("#ootd")) {
        $("#ootd").show();
        // $(".lu-ldg").addClass('lu-ldg-ootd');
        $('html , body').animate({
            scrollTop: $('#ootd').offset().top - 70,
        }, 900);
    }

    $(".ootd_button img").click(function (e) {
        e.preventDefault();
        var dataset = $(this).data("day")
        $(".ootd_show").html(`<img src="img/06_hide/ootd/ootd_${dataset}.png" alt="" class="imgcss">`)
    });


    //member
    if(edmhref.includes("#member_Bronze")){
        $(".member_Br").show();
        // $(".member_use").show();

        //member_popup 視窗 open
        $(".discount").text("獨家網頁優惠");
        $(".medal_text_1").text("銅");
        $(".medal_text_2").text("網頁");
        $("#member_popup").show();
        setTimeout(function() {
            $(".progress-marker").addClass("moveto_silver");
        }, 500);
    } else if (edmhref.includes("#member_S200")) {
        $(".member_S200").show();
        $(".member_use").show();

        member_scroll()

        //member_popup 視窗 open
        $(".discount").text("立即折 200 元！");
        $(".medal_text_1").text("銀");
        $(".medal_text_2").text("銀級");
        $("#member_popup").show();
        setTimeout(function() {
            $(".progress-marker").addClass("moveto_gold");
        }, 500);
    } else if (edmhref.includes("#member_G450")) {
        $(".member_G450").show();
        $(".member_use").show();

        member_scroll()

        //member_popup 視窗 open
        $(".discount").text("立即折 450 元！");
        $(".medal_text_1").text("金");
        $(".medal_text_2").text("金級");
        $("#member_popup").show();
        setTimeout(function() {
            $(".progress-marker").addClass("moveto_bkgold");
        }, 500);
    } else if (edmhref.includes("#member_G600")) {
        $(".member_G600").show();
        $(".member_use").show();

        member_scroll()
    }

    function member_scroll(){
        if (window.innerWidth < 768) {
            $('html , body').animate({
                scrollTop: $('#member_box').offset().top - 40,
            }, 900);
            setTimeout(() => {
                $('html , body').animate({
                    scrollTop: $('#member_box').offset().top - 60,
                }, 900);
            }, 3000)
        } else {
            $('html , body').animate({
                scrollTop: $('#member_box').offset().top + 40,
            }, 900);
            setTimeout(() => {
                document.getElementById("member_box").scrollIntoView({ behavior: "smooth", block: "start" });
            }, 3000)
        }
    }

    // coupon折扣 
    function copybtn(level, couponcode, money) {
        // 複製（利用 Clipboard API 中的寫入功能）
        navigator.clipboard.writeText(couponcode);
        confirm(`恭喜您符合會員等級-${level}級！\n您已複製以下優惠代碼：${couponcode}\n選擇商品加入購物車後，於「優惠代碼」欄位輸入：${couponcode}\n即可享有${level}級會員限定優惠=網頁價格再折台幣${money}!!`)
    }

    $(".member_popup_copy .member_S200").on("click", function () {
        copybtn("銀", "LNMBS200", "200元(≒HKD$48)");
    });
    $(".member_popup_copy .member_G450").on("click", function () {
        copybtn("金", "LNMBG450", "450元(≒HKD$107)");
    });

    $(".member_S200").on("click", function () {
        copybtn("銀", "LNMBS200", "200元(≒HKD$48)");
    });
    $(".member_G450").on("click", function () {
        copybtn("金", "LNMBG450", "450元(≒HKD$107)");
    });
    $(".member_G600").on("click", function () {
        copybtn("黑金", "LNMBG600", "600元(≒HKD$143)");
    });

});