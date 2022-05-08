
//投稿内容の表示

$(function() {

  $('#click').on('click', function() {

    $('.introduction').toggle('slow', alertFunc);

    $('.line').toggle('slow', alertFunc);
    
  });

  function alertFunc() {

    if ($(this).css('display') == 'none') {

      $("#click").text("CLICK ▶︎");

    } else {

      $("#click").text("CLOSE ×");

    }
  };
});
