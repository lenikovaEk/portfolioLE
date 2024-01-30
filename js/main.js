


  $(document).ready(function(){
    $('.header__burger,.header__nav').click(function(event){
      $('.header__burger,.header__nav,.header__burger--line,.header__top').toggleClass('active');
      $('.body').toggleClass('lock');   
    });
  });

// $('.header__burger, ').on('click', function () {
//   $('.header__burger,.header__nav,.header__burger--line').toggleClass('active');
// });

$(".header__list a").on("click", function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 1500);
});
