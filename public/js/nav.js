$(function() {

  $('.close_side_nav_btn').on('click', function() {
    $('.side_nav_cover').removeClass('d-md-block');
    $('.reviews').css('margin', '0 5% 0 20%');
  });

  $('.side_nav_btn').hover(
    function() {
      $('.side_nav_cover').addClass('d-md-block');
      $('.reviews').css('margin', '0 5% 0 40%');
    }
  );

})
