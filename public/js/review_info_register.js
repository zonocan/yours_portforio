
$(function() {
  //スマホの場合ヘッダーのボタンから投稿画像の登録
  $('#register_btn').click(function() {
    $('#register_info_form').submit();
    $('#register_btn').toggleClass('isActive')
  })

});
