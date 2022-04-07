$(function() {

  $('.close_side_nav_btn').on('click', function() {
    $('.side_nav_cover').removeClass('d-md-block');
  });

  $('.side_nav_btn').hover(
    function() {
      $('.side_nav_cover').addClass('d-md-block');
    }
  );

})
