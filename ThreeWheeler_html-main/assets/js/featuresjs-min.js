function savCookie(){localStorage.setItem("cookieenabled","Yes"),$(".cookie_bot").fadeOut(),$(bottomCtaSticky).addClass("nocookie"),$(bottomCtaSticky).removeClass("yescookie")}$(document).ready(function(){$(".banner-slider").slick({arrows:!1,draggable:!0,dots:!0,slidesToShow:1,autoplay:!1,speed:300,infinite:!0,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',responsive:[{breakpoint:1024,settings:{slidesToShow:1}},{breakpoint:991,settings:{slidesToShow:1,dots:!0}}]}),$(".iceev-video-slider").slick({arrows:!0,draggable:!0,infinite:!1,dots:!1,slidesToShow:3,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".testimonials-slider").slick({arrows:!0,draggable:!0,infinite:!1,dots:!1,slidesToShow:3,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slider-for").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,draggable:!1,fade:!0,asNavFor:".slider-nav"}),$(".slider-nav").slick({slidesToShow:3,slidesToScroll:1,asNavFor:".slider-for",dots:!1,arrows:!0,centerMode:!0,focusOnSelect:!0,centerPadding:"0px",responsive:[{breakpoint:991,settings:{dots:!1,slidesToShow:1}},{breakpoint:991,settings:{autoplay:!1,dots:!1,slidesToShow:1,centerMode:!1}}]}),$(".passenger-slider").slick({arrows:!0,draggable:!0,dots:!1,slidesToShow:3,infinite:!1,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1,dots:!1,arrows:!0}}]}),$(".feature-slider").slick({arrows:!0,draggable:!1,dots:!1,slidesToShow:3,infinite:!1,prevArrow:"<button type=\"button\" data-role=\"none\" class=\"slick-prev\" onClick=\"PushDataLayerGeneral('Vehicle_Features','Vehicle Features',$('#our-product-section .nav-link.active').text(),' left arrow')\">Previous</button>",nextArrow:"<button type=\"button\" data-role=\"none\" class=\"slick-next\" onClick=\"PushDataLayerGeneral('Vehicle_Features','Vehicle Features',$('#our-product-section .nav-link.active').text(),' right arrow')\">Next</button>",responsive:[{breakpoint:1024,settings:{slidesToShow:2,infinite:!0}},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".feature-slider-mobile").slick({arrows:!0,draggable:!1,dots:!1,slidesToShow:3,infinite:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,infinite:!1}},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1,infinite:!1}}]}),$(".finance-slider").slick({arrows:!1,draggable:!1,dots:!0,slidesToShow:4,autoplay:!0,autoplaySpeed:2e3,infinite:!0,slidesToScroll:2,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:991,settings:{slidesToShow:1,dots:!0,slidesToScroll:1}}]}),$(".tvs-product-slider").slick({arrows:!0,draggable:!0,dots:!1,slidesToShow:1,autoplay:!1,fade:!0,speed:30,infinite:!0,cssEase:"ease-in-out",prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',responsive:[{breakpoint:1024,settings:{slidesToShow:1}},{breakpoint:991,settings:{slidesToShow:1}}]}),$(".accessories-slider").slick({arrows:!0,draggable:!0,dots:!1,slidesToShow:1,fade:!0,prevArrow:"<button type=\"button\" data-role=\"none\" class=\"slick-prev\" onClick=\"PushDataLayerSubmit('Accessories','Accessories','Arrow Click','Left Arrow',$('#variantName').val())\">Previous</button>",nextArrow:"<button type=\"button\" data-role=\"none\" class=\"slick-next\" onClick=\"PushDataLayerSubmit('Accessories','Accessories','Arrow Click','Right Arrow',$('#variantName').val())\">Next</button>",responsive:[{breakpoint:1024,settings:{slidesToShow:1,infinite:!0}},{breakpoint:991,settings:{slidesToShow:1}}]}),$(".productvarient-slider").slick({arrows:!1,draggable:!0,dots:!1,infinite:!0,slidesToShow:1,autoplay:!0,fade:!0,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',responsive:[{breakpoint:1024,settings:{slidesToShow:1,infinite:!0}},{breakpoint:991,settings:{slidesToShow:1}}]}),$(".target-link").on("click",function(e){var t=window.outerWidth;e.preventDefault();var o=$(this).attr("href");tabsTarget=$(this).attr("data-target"),tabsTarget&&$('#pills-tab a[href="'+tabsTarget+'"]').tab("show"),tabsTarget&&$('#pills-tab a[href="'+tabsTarget+'"]').tab("show");var i=$(this).html();$(".responsive-link").text(i),"#smartXonnect-section"===o?t>992?$("html, body").animate({scrollTop:$(o).offset().top},1e3):t<991.98&&$("html, body").animate({scrollTop:$(o).offset().top-50},1e3):t>992?$("html, body").animate({scrollTop:$(o).offset().top-50},1e3):t<991.98&&$("html, body").animate({scrollTop:$(o).offset().top-80},1e3)}),$(".map-btn").on("click",function(e){$(".list-btn").removeClass("active"),$(this).addClass("active"),$(".ride-change-wrapper.bg-none").addClass("map-view")}),$(".list-btn").on("click",function(e){$(".map-btn").removeClass("active"),$(this).addClass("active"),$(".ride-change-wrapper.bg-none").removeClass("map-view")}),$(window).scroll(function(){$(this).scrollTop()>100?$(".arrow-goto-top").fadeIn():$(".arrow-goto-top").fadeOut()}),$(".arrow-goto-top").click(function(){$("html, body").animate({scrollTop:0},500)}),$("#multiselect").multiselect({includeSelectAllOption:!0,numberDisplayed:2,nonSelectedText:"Interested In"})}),window.outerWidth<991&&$("#multiselect").multiselect({includeSelectAllOption:!0,numberDisplayed:1,nonSelectedText:"Interested in"}),function(e){e.fn.extend({rotaterator:function(t){t=e.extend({fadeSpeed:500,pauseSpeed:100,child:null},t);return this.each(function(){var o=t,i=e(this);if(e(i.children(),i).each(function(){e(this).hide()}),o.child)s=o.child;else var s=e(i).children(":first");e(s).fadeIn(o.fadeSpeed,function(){e(s).delay(o.pauseSpeed).fadeOut(o.fadeSpeed,function(){var t=e(this).next();0==t.length&&(t=e(i).children(":first")),e(i).rotaterator({child:t,fadeSpeed:o.fadeSpeed,pauseSpeed:o.pauseSpeed})})})})}})}(jQuery),$(document).ready(function(){$("#rotate").rotaterator({fadeSpeed:800,pauseSpeed:200}),$("#rotate-mobile").rotaterator({fadeSpeed:800,pauseSpeed:200})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var t="ellipsis",o='<span style="white-space: nowrap;">',i={lines:"auto",ellipClass:"ellip",responsive:!1};function s(s,n){var a,l,r,c,d,p,u,h=this,b=0,v=[];function f(){var t;"number"==typeof h.opts.lines&&h.opts.lines<2?h.$el.addClass(h.opts.ellipLineClass):(p=h.$cont.height(),"auto"===h.opts.lines&&h.$el.prop("scrollHeight")<=p||a&&(u=e.trim(h.text).split(/\s+/),h.$el.html(o+u.join("</span> "+o)+"</span>"),h.$el.find("span").each(a),null!=l&&(u[t=l]='<span class="'+h.opts.ellipLineClass+'">'+u[t],u.push("</span>"),h.$el.html(u.join(" ")))))}if(h.$cont=e(s),h.opts=e.extend({},i,n),"auto"===h.opts.lines){a=function(t,o){var i=e(o),s=i.position().top;if(d=d||i.height(),s===c?v[b].push(i):(c=s,v[b+=1]=[i]),s+d>p)return l=t-v[b-1].length,!1}}if("number"==typeof h.opts.lines&&h.opts.lines>1){a=function(t,o){var i=e(o).position().top;if(i!==c&&(c=i,b+=1),b===h.opts.lines)return l=t,!1}}if(h.opts.responsive){e(window).on("resize."+t,function(){v=[],b=0,c=null,l=null,h.$el.html(h.text),clearTimeout(r),r=setTimeout(f,100)})}h.text=h.$cont.text(),h.opts.ellipLineClass=h.opts.ellipClass+"-line",h.$el=e('<span class="'+h.opts.ellipClass+'" />'),h.$el.text(h.text),h.$cont.empty().append(h.$el),f()}e.fn[t]=function(o){return this.each(function(){try{e(this).data(t,new s(this,o))}catch(e){window.console&&console.error(t+": "+e)}})}}),$(".overflow").ellipsis(),$(".ellipsis-3").ellipsis({lines:3}),$(".box--responsive").ellipsis({responsive:!0}),$(document).ready(function(){$("li.product-nav-menu").click(function(){$(".mega-menu").toggle(300)})}),$(".menu-button").on("click",function(){$(".jumplinks-menu-wrapper").toggleClass("jlinks-menu-hidden"),$(".menu-cross").toggleClass("cross-hidden")}),$(document).ready(function(){$(".our-product-image-tabs .nav-pills.js-pillstab li a").click(function(e){var t=$(this).attr("href");$(".our-product-image-tabs .nav-pills.js-pillstab li").removeClass("active"),$('.our-product-image-tabs .nav-pills.js-pillstab li a[href="'+t+'"]').closest("li").addClass("active"),$(".tab-content.js-tabcontent .tab-pane.fade.show").removeClass("active"),$(".tab-content.js-tabcontent .tab-pane.fade.show"+t).addClass("active")}),$(".nav.nav-pills.js-pillstab li").click(function(){var e=$(this).position();scroll=$(".nav.nav-pills.js-pillstab").scrollLeft(),$(".nav.nav-pills.js-pillstab").animate({scrollLeft:scroll+e.left-30},100),$(".nav.nav-pills.js-pillstab li").removeClass("active"),$(this).addClass("active")})}),$(function(){$("#tags").autocomplete({source:["ActionScript","AppleScript","Asp","BASIC","C","C++","Clojure","COBOL","ColdFusion","Erlang","Fortran","Groovy","Haskell","Java","JavaScript","Lisp","Perl","PHP","Python","Ruby","Scala","Scheme"]})}),$(".show-more-content-web").hide(),$("#show-more-web").click(function(){$(".show-more-content-web").slideToggle(500),$("#show-less-web").show(500),$(this).hide()}),$("#show-less-web").click(function(){$(".show-more-content-web").hide(500),$("#show-more-web").show(500),$(this).hide()}),$(".show-more-content-mobile").hide(),$("#show-more-mobile").click(function(){$(".show-more-content-mobile").slideToggle(500),$("#show-less-mobile").show(500),$(".glob-wrapper").addClass("mobile-glob-visible"),$(this).hide()}),$("#show-less-mobile").click(function(){$(".show-more-content-mobile").hide(500),$("#show-more-mobile").slideToggle(500),$(".glob-wrapper").removeClass("mobile-glob-visible"),$(this).hide()});var arrowClick=0;$(document).ready(function(){$(".form-control.tech-form").change(function(){$(this).find("option:selected").each(function(){var e=$(this).attr("value");e?($(".box").not("."+e).css({visibility:"hidden",height:0}),$("."+e).css({visibility:"visible",height:"auto"}),$(".tabs").animate({left:0,scrollLeft:0},200),$(".tabs li").removeClass("active"),$("."+e+" .tabs li:first-child").addClass("active"),$(".tabContent .div").hide(),$("."+e).find(".tabContent .div:first-child").show(),$("."+e+" .tabs li").scrollLeft("active")):$(".box").hide()})}).change()}),$(".tabContent .div:not(:first)").toggle(),$(".previous").show(),$(".tabs li").click(function(){$(this).is(":last-child"),$(".next").show(),$(this).is(":first-child"),$(".previous").show();var e=$(this).position(),t=$(this).data("id");if(scroll=$(".tabs").scrollLeft(),$(".tabs").animate({scrollLeft:scroll+e.left-100},200),$(".tabContent .div").hide(),$(".div."+t).toggle(),$(".tabs li").removeClass("active"),$(this).addClass("active"),0==arrowClick){var o=$("#technical-specifications .arrow-counter .active span").text();PushDataLayerDimensions("Technical_Specifications","Technical Specifications","Specification Select",o,$("#variantName").val(),$("#techspecifications option:selected").text())}}),$(".div a").click(function(e){e.preventDefault(),$("li.active").next("li").trigger("click")}),$(".next").click(function(e){e.preventDefault(),PushDataLayerDimensions("Technical_Specifications","Technical Specifications","Arrow Click","Right Arrow",$("#variantName").val(),$("#techspecifications option:selected").text()),arrowClick=1,$("li.active").next("li").trigger("click"),arrowClick=0}),$(".previous").click(function(e){PushDataLayerDimensions("Technical_Specifications","Technical Specifications","Arrow Click","Left Arrow",$("#variantName").val(),$("#techspecifications option:selected").text()),e.preventDefault(),arrowClick=1,$("li.active").prev("li").trigger("click"),arrowClick=0}),$("#searchControl").bind("keyup change",function(e){var t=$(this).val();$("body").removeHighlight(),t?($(".js-faq .varient-faq").highlight(t),$(".card-inner").removeClass("show").removeAttr("style"),$(".accrodion-tab").removeClass("active").removeAttr("style"),$(".child-accordion").removeClass("show").removeAttr("style"),$(".highlight").each(function(){if($(this).parents(".child-accordion-detail").length){var e=$(this).parents(".card-inner"),t=e.siblings(".accrodion-tab"),o=e.parents(".child-accordion");o.siblings(".accrodion-tab").addClass("active"),o.addClass("show"),t.addClass("active"),e.addClass("show")}if($(this).closest(".accrodion-tab")){var i=$(this).closest(".accrodion-tab").parents(".child-accordion");i.siblings(".accrodion-tab").addClass("active"),i.addClass("show")}})):""===t&&($(".accrodion-tab").removeClass("active"),$(".accrodion-tab").next().removeClass("show"),$(".accrodion-tab").next().slideUp(350)),setTimeout(function(){scrollTo.update()},500)}),jQuery.fn.highlight=function(e){return this.each(function(){!function e(t,o){var i=0;if(3==t.nodeType){var s=t.data.toUpperCase().indexOf(o);if(s>=0){var n=document.createElement("span");n.className="highlight";var a=t.splitText(s),l=(a.splitText(o.length),a.cloneNode(!0));n.appendChild(l),a.parentNode.replaceChild(n,a),i=1}}else if(1==t.nodeType&&t.childNodes&&!/(script|style)/i.test(t.tagName))for(var r=0;r<t.childNodes.length;++r)r+=e(t.childNodes[r],o);return i}(this,e.toUpperCase())})},jQuery.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){var e=this.parentNode;e.replaceChild(this.firstChild,this),function e(t){for(var o=0,i=t.childNodes,s=i.length;o<s;o++){var n=i[o];if(1!=n.nodeType){if(3==n.nodeType){var a=n.nextSibling;if(null!=a&&3==a.nodeType){var l=n.nodeValue+a.nodeValue;new_node=t.ownerDocument.createTextNode(l),t.insertBefore(new_node,n),t.removeChild(n),t.removeChild(a),o--,s--}}}else e(n)}}(e)}).end()},$(document).ready(function(){$("#button").click(function(){var e=$(this).data("title");PushDataLayerGeneral("Sidetray_Click","Sidetray_Click",e,"cta_click")});var e=0;$(window).scroll(function(t){t.preventDefault();var o=$(".counter").offset().top-window.innerHeight;0==e&&$(window).scrollTop()>o&&($(".count").each(function(){var e=$(this),t=e.attr("data-count");$({countNum:e.text()}).animate({countNum:t},{duration:2e3,easing:"swing",step:function(){e.text(Math.floor(this.countNum))},complete:function(){e.text(this.countNum)}})}),e=1)})});