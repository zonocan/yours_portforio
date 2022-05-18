
//

$(function() {

//プロフィールの表示

  $('#profile').on('click', function() {

    $('.introduction').toggle('slow', alertFunc);

    $('.line').toggle('slow', alertFunc);

  });

//プロフィールボタンのテキストの変更

  function alertFunc() {

    if ($(this).css('display') == 'none') {

      $("#profile").text("PROFILE ▶︎");

    } else {

      $("#profile").text("CLOSE ×");

    }
  };

  
});
