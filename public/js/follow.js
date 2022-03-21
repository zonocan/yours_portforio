
$(function() {

  $('.follow_btn').on('click', function() {

    if ($(this).text() === 'フォロー中') {
      $(this).text('フォロー');
      alert('フォローを解除しますか?')
    } else {
      $(this).text('フォロー中')
    }

    $(this).toggleClass('followed');

  });

});
