

$(function() {

  let like = $('.like_toggle');

  like.on('click',function(){
    let $this = $(this);
    $this.toggleClass('liked');

    $('.like_counter').css('display', 'block');
  });

});
