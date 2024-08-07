$(document).ready(function (){
    /* counted code */
    let counted = 0;
    
    $(window).scroll(function(e) {
     e.preventDefault();
     let TopVariable = $('.counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > TopVariable) {
        $('.count').each(function() {
            let $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
                countNum: countTo
            },
            {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
            },
                complete: function() {
                    $this.text(this.countNum); 
            }
            });
        });
        counted = 1;
    }
    });
});

$(function () {
    let availableTags = [
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
$('#show-more-web').click(function(){
	$('.show-more-content-web').slideToggle(500);
	$('#show-less-web').show(500);
	$(this).hide();
});

$('#show-less-web').click(function(){
	$('.show-more-content-web').hide(500);
	$('#show-more-web').show(500);
	$(this).hide();
});

$('.show-more-content-mobile').hide();
$('#show-more-mobile').click(function(){
	$('.show-more-content-mobile').slideToggle(500);
	$('#show-less-mobile').show(500);
    $('.glob-wrapper').addClass('mobile-glob-visible');
	$(this).hide();
});

$('#show-less-mobile').click(function(){
	$('.show-more-content-mobile').hide(500);
	$('#show-more-mobile').slideToggle(500);
    $('.glob-wrapper').removeClass('mobile-glob-visible');
	$(this).hide();
    
});

$('.our-product-image-tabs .nav-pills.js-pillstab li a').click(function (e) {     
    //get selected href
    var href = $(this).attr('href');    
    //set all nav tabs to inactive
    $('.our-product-image-tabs .nav-pills.js-pillstab li').removeClass('active');    
    //get all nav tabs matching the href and set to active
    $('.our-product-image-tabs .nav-pills.js-pillstab li a[href="'+href+'"]').closest('li').addClass('active');
    //active tab
    $('.tab-content.js-tabcontent .tab-pane.fade.show').removeClass('active');
    $('.tab-content.js-tabcontent .tab-pane.fade.show'+href).addClass('active'); 
})


 
$(document).ready(function() { 
    $('#multiselect').multiselect({ 
      includeSelectAllOption : true,
      numberDisplayed: 2,
          nonSelectedText: 'Interested in'
    }); 
  });

if (window.outerWidth < 991) {   
    $('#multiselect').multiselect({ 
        includeSelectAllOption : true,
        numberDisplayed: 1,
            nonSelectedText: 'Interested in'
      });
}