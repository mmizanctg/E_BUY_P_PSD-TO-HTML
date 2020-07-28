$(function(){
   //stickyMenu js start
   var menuTopOffset =$('#header_2').offset().top
   $(window).on('scroll',function(){
      var scrollSize =$(window).scrollTop()
      if(scrollSize >menuTopOffset){
         $('#header_2').addClass('stickyMenu')
      }else{
         $('#header_2').removeClass('stickyMenu') 
      }
   //scroll button js start 
      if(scrollSize < 1500){
         $('.bottomTop').hide(600)
      }else{
         $('.bottomTop').show(600) 
      }
   })
   //scroll click button js start 
   $('.bottomTop').on('click',function(){
      $('html,body').animate({
         scrollTop:0
      },1000)
   })

   //Wow Js Code
   new WOW().init();

   //Banner slick js start
   $('#banner').slick({
      autoplay:true,
      autoplaySpeed:1000,
      arrows:false,
      speed:800,
      dotsClass: 'banner_slick_dots',
   });
   //banner Slider
   $('.banner_slider').slick({
      autoplay:true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:'<i class="fa fa-chevron-left banner_slider_left"></i>',
      nextArrow:'<i class="fa fa-chevron-right banner_slider_right"></i>',
   })
   //Featured filterizer

   $('.filter-container').filterizr();
   $('.featured_menu ul li').on('click', function () {
      $('.featured_menu ul li').removeClass('active')
      $(this).addClass('active')
   })

   // Counter JS code
   $('.counter').counterUp({
      delay: 20,
      time: 1500,
   });

   //Venobox for work section
   $('.venobox').venobox({
      spinner:'cube-grid',
      spinColor:'#D64745',
      titleattr: 'data-title',
   });
})