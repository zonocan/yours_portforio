
$(function() {
  //スマホの場合ヘッダーのボタンから投稿画像の登録
  $('#register_btn').click(function() {
    $('#create_acount_form').submit();
    $('#register_btn').toggleClass('isActive')
  })

});
