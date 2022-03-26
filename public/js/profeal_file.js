
$(function() {
  //投稿する画像の読み込み

  $('#profeal_file').change(function(e) {

    var reader = new FileReader();
    reader.onload = function (e) {
      $("#preview").attr('src',e.target.result);
    }

    reader.readAsDataURL(e.target.files[0]);

    $('.profeal_file').css('display', 'none');
    $('#preview').css('display', 'block');
  })

});
