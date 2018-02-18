$(document).ready(function(){
    $(".main-menu li.dropdown").hover(function () {
        $(this).addClass("open");
    }, function () {
        $(this).removeClass("open");
    });
});