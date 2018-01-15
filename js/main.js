//　返回顶部
$(function() {
    $('#back').hide(); //隐藏go to top按钮
    $(window).scroll(function() {
      // console.log($(this).scrollTop());

      //当window的scrolltop距离大于1时，go to
      if ($(this).scrollTop() > 100) {
        $('#back').fadeIn();
      } else {
        $('#back').fadeOut();
      }
    });

    $('#back a').click(function() {
      $('html ,body').animate({
        scrollTop: 0
      }, 300);
      return false;
    });
  });

//　音乐点击
  $(document).ready(function() {
    $("#music").click(function() {
      $("#musicbox").toggle(300);
    });
    $("#menu").click(function() {
      $("#header").toggle();
    });
    $(".close").click(function() {
      $("#header").css("display", "none");
    });
    $(".typo a").click(function() {
      $("#line").css("display", "block");
    });
  });
// 菜单点击
  $("#project").click(function() {
    $(".project").css("display", "block");
    $(".about,#container").css("display", "none");
  })
  $("#about").click(function() {
    $(".about").css("display", "block");
    $(".project,#container").css("display", "none");
  })

// 赋予排版
  var typo = document.getElementById("container");
  typo.className = "typo";

// 上导航自动隐藏
/*
  var new_scroll_position = 0;
  var last_scroll_position;
  var header = document.getElementById("nav");
  var backtop = document.getElementById("backtop");
  window.addEventListener('scroll', function(e) {
    last_scroll_position = window.scrollY;
    // Scrolling down
    if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
      // header.removeClass('slideDown').addClass('slideUp');
      header.classList.remove("slideDown");
      header.classList.add("slideUp");
      // Scrolling up
    } else if (new_scroll_position > last_scroll_position) {
      // header.removeClass('slideUp').addClass('slideDown');
      header.classList.remove("slideUp");
      header.classList.add("slideDown");
    }
    new_scroll_position = last_scroll_position;
  });
  */
