// 立即訂購btn動態
$('a[href="#offer"]').click(function (e) {
    e.preventDefault();
    $('#event').attr("style", "display:block;");
    $('html , body').animate({
        scrollTop: $('#offer').offset().top - 40,
    }, 900);
});

// offer按鈕
$('a[href="#lp_form"]').click(function (e) {
    e.preventDefault();
    $('html , body').animate({
        scrollTop: $('#eventbox').offset().top,
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
    $(".lu-ldg").addClass('lu-ldg-hide');
    $('html , body').animate({
        scrollTop: $('#food').offset().top - 70,
    }, 900);
}
if (edmhref.includes("#replace")) {
    $("#replace").show();
    $(".lu-ldg").addClass('lu-ldg-hide');
    $('html , body').animate({
        scrollTop: $('#replace').offset().top - 70,
    }, 900);
}
if (edmhref.includes("#massage")) {
    $("#massage").show();
    $(".lu-ldg").addClass('lu-ldg-hide');
    $('html , body').animate({
        scrollTop: $('#massage').offset().top - 70,
    }, 900);
}
if (edmhref.includes("#ootd")) {
    $("#ootd").show();
    $(".lu-ldg").addClass('lu-ldg-ootd');
    $('html , body').animate({
        scrollTop: $('#ootd').offset().top - 70,
    }, 900);
}

$(".ootd_button img").click(function (e) { 
    e.preventDefault();
    var dataset=$(this).data("day")
    $(".ootd_show").html(`<img src="img/06_hide/ootd/ootd_${dataset}.png" alt="" class="imgcss">`)
});

 // coupon折扣
//  $('.coupon01_btn').click(function () {
//     $('#money').text(`$200`);
//     $('#coupon_money').text(`$200`);
//     $('#copy_couponcode').text(`23L200C0523`);
// });
// $('.coupon02_btn').click(function () {
//     $('#money').text(`$150`);
//     $('#coupon_money').text(`$150`);
//     $('#copy_couponcode').text(`L150C052323`);
// });
// $('.coupon03_btn').click(function () {
//     $('#money').text(`$100`);
//     $('#coupon_money').text(`$100`);
//     $('#copy_couponcode').text(`0523C100L23`);
// });

    // copy折扣碼 
    // $(".copybtn").on("click", function () {
    //     var text = '2311thanks';
    //     var textarea = document.getElementById("event_couponcode");
    //     // 賦值
    //     textarea.innerText = text;
    //     // 選中
    //     window.getSelection().selectAllChildren(textarea);
    //     // 複製
    //     document.execCommand('copy', true);

    //     confirm(`恭喜您成功折扣碼！\n您已複製以下優惠代碼，\n於購物車「優惠代碼」欄位輸入 即可享總結帳金額再折$50元\n優惠代碼：${text}`)
    //     if($(window).scrollTop() > $('#offer').offset().top){
    //         e.preventDefault()
    //     }else{
    //         $('html , body').animate({
    //             scrollTop: $('#offer').offset().top,
    //         }, 900);
    //     }

    // });
    // $(".eventbtn").on("click", function () {
    //     if($(window).scrollTop() > $('#offer').offset().top){
    //         e.preventDefault()
    //     }else{
    //         $('html , body').animate({
    //             scrollTop: $('#offer').offset().top,
    //         }, 900);
    //     }

    // });
