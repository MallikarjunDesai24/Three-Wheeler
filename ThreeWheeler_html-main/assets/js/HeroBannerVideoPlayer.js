 

$('.banner-slider-home').slick({
    arrows: false,
    draggable: true,
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    speed: 300,
    infinite: true,
    prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                dots: true,
            },
        }, 
    ],
}); 


        // document.querySelector('#jsu400-Video').addEventListener("click", playPauseVideo);
        // document.querySelector('#jsvideob-button').addEventListener("click", playPauseVideo);
function playPauseVideo() {
    const video = document.querySelector('#jsu400-Video');
    const buttonV = document.querySelector('#jsvideob-button');
    console.log(buttonV);
    if(video.paused) {
        video.play();
        buttonV.setAttribute("style", "display:none;");
    } else {
        video.pause();
        buttonV.setAttribute("style", "display:block;");
    }

    var video_tag = document.getElementById("jsu400-Video"), isPlayingvideo = 0 < video_tag.currentTime && !video_tag.paused && !video_tag.ended && video_tag.readyState > video_tag.HAVE_CURRENT_DATA;
        function addSourceToVideo(e, t) {
            var o = document.createElement("source");
            o.src = t,
            o.type = "video/mp4",
            e.appendChild(o)
    }
    function whichSizeVideo(e, t) {
        addSourceToVideo(e, 768 < (window.innerWidth || $(window).width()) ? t.dataset.desktopVid : t.dataset.mobileVid)
    }
   // isPlayingvideo || video_tag.play(),
    whichSizeVideo(video_tag, video_tag); 

    $('.slider.banner-slider-home').on('beforeChange', function(event, slick, currentSlide, nextSlide){ 
        // const video = $('.slick-slide:not(.slick-cloned)').find('video').get(0);
        //      $('.instructions').children('#jsvideob-button').show();
        //      video.pause();
        setTimeout(()=>{
            const video = document.querySelector('#jsu400-Video');
            const buttonV = document.querySelector('#jsvideob-button');
            video.pause();
            buttonV.setAttribute("style", "display:block;");    
        },100)
    }); 
    window.onscroll = function () {
        onScrollPause()
    };
    function onScrollPause() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            video.pause();
            buttonV.setAttribute("style", "display:block;");
        }
    }
}       
    const video = document.querySelector('#jsu400-Video');
    const buttonV = document.querySelector('#jsvideob-button');
    video.onended = function() {
            video.currentTime=0;
            buttonV.setAttribute("style", "display:block;");
            v=video.currentSrc;
            video.src='';
            video.src=v;  
            video.pause();
    };

    if(768 < (window.innerWidth || $(window).width())){
        video.setAttribute("poster", "./assets/images/web-video.png");
    }
    else{
        video.setAttribute("poster", "./assets/images/mobile-video.png");
    }   



var tag = document.createElement("script");
tag.id = "iframe-demo";
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
    events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
    },
    });
}

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
    $(".vd").addClass("d-none").removeClass("d-block");
    $(".first-banner").addClass("d-block").removeClass("d-none");
    }
});

$(document).ready(function () {
    $(".play-btn-wrape").on("click", function () {
    $(".vd").addClass("d-block");
    });

    $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
        $(".vd").addClass("d-none").removeClass("d-block");
        $(".first-banner").addClass("d-block").removeClass("d-none");
        // $(".banner-slider-home").slick("slickPlay");
    }
    });
});

function onPlayerReady(event) {
    var playButton = document
    .getElementById("playYT")
    .addEventListener("click", playVideo);

    $("ul.slick-dots").on("click", function () {
    $(".vd").addClass("d-none").removeClass("d-block");
    $(".first-banner").addClass("d-block").removeClass("d-none");
    });

    function playVideo(e) {
    e.stopPropagation();
    player.playVideo();
    $(".vd").addClass("d-block").removeClass("d-none");
    $(".first-banner").addClass("d-none").removeClass("d-block");
    }

    var bodyClick = document
    .querySelector("body")
    .addEventListener("click", stopVideo);
    function stopVideo() {
    player.stopVideo();
    }

    window.onscroll = function () {
    onScrollPause();
    };
    function onScrollPause() {
    if (
        document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300
    ) {
        pauseVideo();
    }
    }
    function pauseVideo() {
    player.pauseVideo();
    }
}

function changeBorderColor(playerStatus) {
    if (playerStatus == 1) {
        document.getElementById("videoWrapper").classList.add("play");
    } else if (playerStatus == 0) {
        document.getElementById("videoWrapper").classList.remove("play");
    } else if (playerStatus == 5) {
        document.getElementById("videoWrapper").classList.remove("play");
    }

    if (playerStatus == 1) {
        $(".banner-slider-home").slick("slickPause");
    } else if (playerStatus == 0) {
        $(".banner-slider-home").slick("slickPlay");
    } else if (playerStatus == 5) {
        $(".banner-slider-home").slick("slickPlay");
    }
}

// function onPlayerStateChange(event) {
//     changeBorderColor(event.data);
// }

function onPlayerStateChange(event, element) {
    if (event.data == YT.PlayerState.ENDED) {
    $(".vd").hide();
    $(".vd").addClass("d-none").removeClass("d-block");
    $(".first-banner").addClass("d-block").removeClass("d-none");
    }
    changeBorderColor(event.data);
}
