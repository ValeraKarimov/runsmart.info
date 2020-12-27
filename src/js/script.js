// $(document).ready(function(){
//    $('.carousel__inner').slick({
//       speed: 300,
//       // adaptiveHeight: true,
//       prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
//       nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
//       responsive: [
//          {
//             breakpoint: 768,
//             settings: {
//                dots: true,
//                arrows: false
//             }
//          }
//       ]
//    });
//  });

const slider = tns({
   container: '.carousel__inner',
   items: 1,
   slideBy: 'page',
   autoplay: false,
   controls: false,
   nav: false
 });

 document.querySelector('.next').addEventListener('click',  function () {
   slider.goTo('next');
 });


 document.querySelector('.prev').addEventListener('click',  function () {
   slider.goTo('prev');
 });