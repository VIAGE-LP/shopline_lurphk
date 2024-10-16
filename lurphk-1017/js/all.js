// 立即訂購btn動態
$('a[href="#offer"]').click(function (e) {
    e.preventDefault();
    $('#event').attr("style", "display:block;");
    $('html , body').animate({
        scrollTop: $('#offer').offset().top - 40,
    }, 900);
});

$('.lu-mv__logo').click(function (e) {
    e.preventDefault();
    $("#news").toggle();
    $(".news_animate").removeClass("animate__animated");
});

var edmhref = location.href;
if (edmhref.includes("#news")) {
    $("#news").show();
    $(".news_animate").removeClass("animate__animated");
}
if (edmhref.includes("#pose")) {
    $("#pose").show();
    //$(".lu-ldg").addClass('lu-ldg-hide');
    $('html , body').animate({
        scrollTop: $('#pose').offset().top - 70,
    }, 900);
}
if (edmhref.includes("#food")) {
    $("#food").show();
    //$(".lu-ldg").addClass('lu-ldg-hide');
    $('html , body').animate({
        scrollTop: $('#food').offset().top - 70,
    }, 900);
}
if (edmhref.includes("#replace")) {
    $("#replace").show();
    //$(".lu-ldg").addClass('lu-ldg-hide');
    $('html , body').animate({
        scrollTop: $('#replace').offset().top - 70,
    }, 900);
}
if (edmhref.includes("#massage")) {
    $("#massage").show();
    //$(".lu-ldg").addClass('lu-ldg-hide');
    $('html , body').animate({
        scrollTop: $('#massage').offset().top - 70,
    }, 900);
}
if (edmhref.includes("#ootd")) {
    $("#ootd").show();
    //$(".lu-ldg").addClass('lu-ldg-ootd');
    $('html , body').animate({
        scrollTop: $('#ootd').offset().top - 70,
    }, 900);
}

$(".ootd_button img").click(function (e) { 
    e.preventDefault();
    var dataset=$(this).data("day")
    $(".ootd_show").html(`<img src="img/06_hide/ootd/ootd_${dataset}.png" alt="" class="imgcss">`)
});

//coupon在指定時間自動切換
const currentDate = new Date();
const coupon_time_1_start = new Date('2024/10/16 00:00:00');
const coupon_time_2_start = new Date('2024/10/20 08:00:00');
const coupon_time_3_start = new Date('2024/10/22 23:00:00');
const coupon_time_4_start = new Date('2024/10/26 23:00:00');

// coupon折扣 
function copybtn(money, couponcode) {
    // 複製（利用 Clipboard API 中的寫入功能）
    navigator.clipboard.writeText(couponcode);
    confirm(`恭喜您成功領取${money}元折扣碼！\n您已複製以下優惠代碼：${couponcode}\n選擇商品加入購物車後，於「優惠代碼」欄位輸入：${couponcode}\n即可享有會員週年慶限定價再折${money}元!!`)
}

//coupon_time_1
if (currentDate >= coupon_time_1_start && currentDate < coupon_time_2_start) {
    // 在活動一的區間內
    // 在這裡執行相應的功能或代碼
    $(".coupon_time_1").show();

    $(".coupon_50_A").on("click", function () {
        copybtn(50, "ANL200");
    });
    $(".coupon_35_A").on("click", function () {
        copybtn(35, "150ANL");
    });
    $(".coupon_25_A").on("click", function () {
        copybtn(25, "100LAN");
    });
//coupon_time_2
} else if (currentDate >= coupon_time_2_start && currentDate < coupon_time_3_start) {
    $(".coupon_time_2").show();

    $(".coupon_50_B").on("click", function () {
        copybtn(50, "ANL200");
    });
    $(".coupon_35_A").on("click", function () {
        copybtn(35, "150ANL");
    });
    $(".coupon_25_A").on("click", function () {
        copybtn(25, "100LAN");
    });

//coupon_time_3
} else if (currentDate >= coupon_time_3_start && currentDate < coupon_time_4_start) {
    $(".coupon_time_3").show();
   
    $(".coupon_35_B").on("click", function () {
        copybtn(35, "150ANL");
    });
    $(".coupon_25_A").on("click", function () {
        copybtn(25, "100LAN");
    });
//coupon_time_4
}else if (currentDate >= coupon_time_4_start){
    $(".coupon_time_4").show();
    
    $(".coupon_25_A").on("click", function () {
        copybtn(25, "100LAN");
    });
}
