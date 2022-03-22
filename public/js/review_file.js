
$(function() {
  //
  $('#review_imgs').change(function() {
    if (!this.files.length) {
      return;
    }

    //
    $('#preview').text('');
    var $files = $(this).prop('files');
    var file_length = $files.length;

    //
    for (var i = 0; i < file_length; i++) {
      var file = $files[i];
      var fr = new FileReader();

      fr.onload = function(e) {
        var src = e.target.result;
        var img = '<li><img src="' + src +'"></li>';
        $('#preview').append(img);
      }
      fr.readAsDataURL(file);
    }

    $('#preview').css('display', 'block');
    $('.review_files').css('display', 'none');
  });
});
