
        $(document).ready(function(){
            $(".form-control.tech-form").change(function(){
                $(this).find("option:selected").each(function(){
                    var optionValue=$(this).attr("value");
                    if(optionValue){
                        $(".box").not("."+optionValue).css({'visibility': 'hidden', 'height': 0});
                        $("."+optionValue).css({'visibility': 'visible', 'height': 'auto'});
                        $('.tabs').animate({
                            left:0,
                            'scrollLeft': 0,                            
                        }, 200);
                        $('.tabs li').removeClass('active');
                        $("."+optionValue +' '+ '.tabs li:first-child').addClass('active');
                        $('.tabContent .div').hide();
                        $("."+optionValue).find('.tabContent .div:first-child').show();
                        $("."+optionValue +' '+ '.tabs li').scrollLeft('active');                          
                    }else{
                        $(".box").hide();
                    }
                });
            }).change();
        });
    // hide all contents accept from the first div
    $('.tabContent .div:not(:first)').toggle();

// hide the previous button
$('.previous').show();

$('.tabs li').click(function () {

    if ($(this).is(':last-child')) {
        $('.next').show();
    } else {
        $('.next').show();
    }

    if ($(this).is(':first-child')) {
        $('.previous').show();
    } else {
        $('.previous').show();
    }

    var position = $(this).position();
    var corresponding = $(this).data("id");

    // scroll to clicked tab with a little gap left to show previous tabs
    scroll = $('.tabs').scrollLeft();
    $('.tabs').animate({
        'scrollLeft': scroll + position.left - 100
    }, 200);

    // hide all content divs
    $('.tabContent .div').hide();

    // show content of corresponding tab
    $('.div.' + corresponding).toggle();

    // remove active class from currently not active tabs
    $('.tabs li').removeClass('active');

    // add active class to clicked tab
    $(this).addClass('active');
});

$('.div a').click(function(e){
    e.preventDefault();
    $('li.active').next('li').trigger('click');
});
$('.next').click(function(e){
    e.preventDefault();
    $('li.active').next('li').trigger('click');
});
$('.previous').click(function(e){
    e.preventDefault();
    $('li.active').prev('li').trigger('click');
});
// if (window.outerWidth < 991) {
//     $('.tabs li').click(function () {

//         if ($(this).is(':last-child')) {
//             $('.next').hide();
//         } else {
//             $('.next').hide();
//         }
    
//         if ($(this).is(':first-child')) {
//             $('.previous').hide();
//         } else {
//             $('.previous').hide();
//         }
//     });
// }