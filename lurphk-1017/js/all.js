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
