// window.addEventListener('scroll', function() {
// console.log('h')
// })
// var $animation_elements = $('.animation-element');
// var $window = $(window);

// function check_if_in_view() {
//   var window_height = $window.height();
//   var window_top_position = $window.scrollTop();
//   var window_bottom_position = (window_top_position + window_height);
 
//   $.each($animation_elements, function() {
//     var $element = $(this);
//     var element_height = $element.outerHeight();
//     var element_top_position = $element.offset().top;
//     var element_bottom_position = (element_top_position + element_height);
 
//     //check to see if this current container is within viewport
//     if ((element_bottom_position >= window_top_position) &&
//         (element_top_position <= window_bottom_position)) {
//       $element.addClass('in-view');
//     } else {
//       $element.removeClass('in-view');
//     }
//   });
// }

// $window.on('scroll resize', check_if_in_view);
// $window.trigger('scroll');
// $(document).ready(function(){
// var animateHeight = $("img").offset().top;

// $(function() {
//     var addAnimation = $('.img-question img');
//     var animateHeight = $(".img-question img").offset().top;
//     var animateHeight_end  = $(".img-question img").offset().top + $(".img-question img").height();
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();

//         if (scroll >= animateHeight && scroll <=  animateHeight_end ) {
//             addAnimation.addClass('animated bounceInRight');
//         } else {
//             addAnimation.removeClass('animated bounceInRight');
//         }
//     });
// });
// $("#button").click(function() {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#elementtoScrollToID").offset().top
//     }, 2000);
// });

// $("html, body").delay(2000).animate({scrollTop: $('#title1').offset().top }, 2000);



$(window).scroll(function(){
    if ($(window).scrollTop() > ($(".img-question img").offset().top - ($(".img-question img").height() + 400))){
        $(".img-question img").removeClass("fadeout").addClass('fadein');
    }else {
        $(".img-question img").addClass('fadeout').removeClass('fadein');
    }
})

// if($(window).scrollTop() >= $(".up").offset().top){
//     $(".up").animate({
//         opacity:"1",
//     },1000
//     );
// }
// });

// (function(){
//     document.documentElement.style.transitionDuration="7s";
//     document.documentElement.style.transitionTimingFunction="ease";
//     document.documentElement.style.transform="rotate(-360deg)";

// }());

