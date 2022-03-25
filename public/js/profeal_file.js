
$(function() {
  //投稿する画像の読み込み

  $('#profeal_file').on('change', function() {
    var $fr = new FileReader();

    $fr.onload = function(){
      $('preview').attr('src', $fr.result);
    }
    $fr.readAsDataURL(this.files[0]);
  })


});
