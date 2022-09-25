
//

$(function() {

//プロフィールの表示

  $('#profile').on('click', function() {

    $('.profile_introduction').toggle('slow', alertFunc);

    $('.profile_line').toggle('slow', alertFunc);

  });


//強みの表示

  $('#strong_point').on('click', function() {

    $('.strong_introduction').toggle('slow', alertFunc);

    $('.strong_line').toggle('slow', alertFunc);

  });


//スキルの表示

  $('#skil').on('click', function() {

    $('.skil_introduction').toggle('slow', alertFunc);

    $('.skil_line').toggle('slow', alertFunc);

  });


  function alertFunc() {


//プロフィールボタンのテキストの変更

    if ($('.profile_introduction').css('display') == 'none') {

      $("#profile").text("PROFILE ▶︎");

    } else {

      $("#profile").text("CLOSE ×");

    }

//強みのテキストの変更

    if ($('.strong_introduction').css('display') == 'none') {

      $("#strong_point").text("STRONG ▶︎");

    } else {

      $("#strong_point").text("CLOSE ×");

    }


    //プロフィールボタンのテキストの変更

    if ($('.skil_introduction').css('display') == 'none') {

      $("#skil").text("SKILS ▶︎");

    } else {

      $("#skil").text("CLOSE ×");

    }

  };



});
