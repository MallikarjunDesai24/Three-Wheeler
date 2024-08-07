$(document).ready(function() {
    $('#button').click(function() {
      var title = $(this).data('title');
      var category = 'Sidetray_Click';
      var action = 'Sidetray_Click';
      var label = 'cta_click'; 
      PushDataLayerGeneral( category, action,title, label) 
    }); 



    /* counted code */
    var counted = 0;
    
    $(window).scroll(function(e) {
     e.preventDefault();
    var TopVariable = $('.counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > TopVariable) {
        $('.count').each(function() {
        var $this = $(this),
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
                    //alert('finished');
            }
            });
        });
        counted = 1;
    }
    });
   
  });

