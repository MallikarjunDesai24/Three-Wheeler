$(document).ready(function (){ 
    $('.our-product-image-tabs .nav-pills.js-pillstab li a').click(function (e) {
        var href = $(this).attr('href');
        $('.our-product-image-tabs .nav-pills.js-pillstab li').removeClass('active');
        //get all nav tabs matching the href and set to active
        $('.our-product-image-tabs .nav-pills.js-pillstab li a[href="' + href + '"]').closest('li').addClass('active');
        //active tab
        $('.tab-content.js-tabcontent .tab-pane.fade.show').removeClass('active');
        $('.tab-content.js-tabcontent .tab-pane.fade.show' + href).addClass('active');

    });
    $('.nav.nav-pills.js-pillstab li').click(function () {
        var position = $(this).position();
        scroll = $('.nav.nav-pills.js-pillstab').scrollLeft();
        $('.nav.nav-pills.js-pillstab').animate({
            'scrollLeft': scroll + position.left - 30
        }, 100);
        $('.nav.nav-pills.js-pillstab li').removeClass('active');
        $(this).addClass('active');
    });
   
});

$(function () {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
});



$('.show-more-content-web').hide();
$('#show-more-web').click(function () {
    $('.show-more-content-web').slideToggle(500);
    $('#show-less-web').show(500);
    $(this).hide();
});

$('#show-less-web').click(function () {
    $('.show-more-content-web').hide(500);
    $('#show-more-web').show(500);
    $(this).hide();
});

$('.show-more-content-mobile').hide();
$('#show-more-mobile').click(function () {
    $('.show-more-content-mobile').slideToggle(500);
    $('#show-less-mobile').show(500);
    $('.glob-wrapper').addClass('mobile-glob-visible');
    $(this).hide();
});

$('#show-less-mobile').click(function () {
    $('.show-more-content-mobile').hide(500);
    $('#show-more-mobile').slideToggle(500);
    $('.glob-wrapper').removeClass('mobile-glob-visible');
    $(this).hide();

});



