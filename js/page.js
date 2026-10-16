$(function () {
  $(".logo_hyper li").on("mouseenter", function () {
    $(this).css({ opacity: "100%" });
  });
  $(".logo_hyper li").on("mouseleave", function () {
    $(this).css({ opacity: "30%" });
  });
  // con03 box01
  $(".con03_box01").on("mouseenter", function () {
    $(this).css({ opacity: "100%", "background-color": "#ffff" });
    $(".con03_txt01").css({ color: "lightgreen" });
  });
  $(".con03_box01").on("mouseleave", function () {
    $(this).css({ opacity: "50%", "background-color": "#ccc" });
    $(".con03_txt01").css({ color: "#000" });
  });
  // sec2
  $(".con03_txt01").on("mouseenter", function () {
    $(".con03_box01").css({ opacity: "100%", "background-color": "#ffff" });
    $(".con03_txt01").css({ color: "lightgreen" });
  });
  $(".con03_txt01").on("mouseleave", function () {
    $(".con03_box01").css({ opacity: "50%", "background-color": "#ccc" });
    $(".con03_txt01").css({ color: "#000" });
  });
  // con03 box02
  $(".con03_box02").on("mouseenter", function () {
    $(this).css({ opacity: "100%", "background-color": "#ffff" });
    $(".con03_txt02").css({ color: "lightgreen" });
  });
  $(".con03_box02").on("mouseleave", function () {
    $(this).css({ opacity: "50%", "background-color": "#ccc" });
    $(".con03_txt02").css({ color: "#000" });
  });
  // sec2
  $(".con03_txt02").on("mouseenter", function () {
    $(".con03_box02").css({ opacity: "100%", "background-color": "#ffff" });
    $(".con03_txt02").css({ color: "lightgreen" });
  });
  $(".con03_txt02").on("mouseleave", function () {
    $(".con03_box02").css({ opacity: "50%", "background-color": "#ccc" });
    $(".con03_txt02").css({ color: "#000" });
  });
  // con03 box03
  $(".con03_box03").on("mouseenter", function () {
    $(this).css({ opacity: "100%", "background-color": "#ffff" });
    $(".con03_txt03").css({ color: "lightgreen" });
  });
  $(".con03_box03").on("mouseleave", function () {
    $(this).css({ opacity: "50%", "background-color": "#ccc" });
    $(".con03_txt03").css({ color: "#000" });
    // sec2
    $(".con03_txt03").on("mouseenter", function () {
      $(".con03_box03").css({ opacity: "100%", "background-color": "#ffff" });
      $(".con03_txt03").css({ color: "lightgreen" });
    });
    $(".con03_txt03").on("mouseleave", function () {
      $(".con03_box03").css({ opacity: "50%", "background-color": "#ccc" });
      $(".con03_txt03").css({ color: "#000" });
    });
  });
  // con03 box04
  $(".con03_box04").on("mouseenter", function () {
    $(this).css({ opacity: "100%", "background-color": "#ffff" });
    $(".con03_txt04").css({ color: "lightgreen" });
  });
  $(".con03_box04").on("mouseleave", function () {
    $(this).css({ opacity: "50%", "background-color": "#ccc" });
    $(".con03_txt04").css({ color: "#000" });
  });
  // sec2
  $(".con03_txt04").on("mouseenter", function () {
    $(".con03_box04").css({ opacity: "100%", "background-color": "#ffff" });
    $(".con03_txt04").css({ color: "lightgreen" });
  });
  $(".con03_txt04").on("mouseleave", function () {
    $(".con03_box04").css({ opacity: "50%", "background-color": "#ccc" });
    $(".con03_txt04").css({ color: "#000" });
  });
  // 1- triangel 01
  $(".box01_con01").on("mouseenter", function () {
    $(".box01_tra01").stop().animate({ right: "0px" }, 100);
  });
  $(".box01_con01").on("mouseleave", function () {
    $(".box01_tra01").stop().animate({ right: "-61px" }, 100);
  });
  // 1- triangel 02
  $(".box01_con02").on("mouseenter", function () {
    $(".box01_tra02").stop().animate({ right: "0px" }, 100);
  });
  $(".box01_con02").on("mouseleave", function () {
    $(".box01_tra02").stop().animate({ right: "-61px" }, 100);
  });
  // 2- triangel 01
  $(".box02_con01").on("mouseenter", function () {
    $(".box02_tra01").stop().animate({ right: "0px" }, 100);
  });
  $(".box02_con01").on("mouseleave", function () {
    $(".box02_tra01").stop().animate({ right: "-61px" }, 100);
  });
  // 2-triangel 02
  $(".box02_con02").on("mouseenter", function () {
    $(".box02_tra02").stop().animate({ right: "0px" }, 100);
  });
  $(".box02_con02").on("mouseleave", function () {
    $(".box02_tra02").stop().animate({ right: "-61px" }, 100);
  });
  // header 메뉴 1
  $(".bar01 li").on("mouseenter", function () {
    $(this).css({ "font-weight": "bold" });
  });
  $(".bar01 li").on("mouseleave", function () {
    $(this).css({ "font-weight": "normal" });
  });
  // header 메뉴 2
  $(".bar02 li").on("mouseenter", function () {
    $(this).css({ "font-weight": "bold" });
  });
  $(".bar02 li").on("mouseleave", function () {
    $(this).css({ "font-weight": "normal" });
  });
  // con02 사진
  $(".product li").on("mouseenter", function () {
    $(this).find("img").css({ opacity: "50%" });
    $(this).find("p").css({ "font-weight": "bold", "font-size": "18px" });
  });

  $(".product li").on("mouseleave", function () {
    $(this).find("img").css({ opacity: "100%" });
    $(this).find("p").css({ "font-weight": "normal", "font-size": "16px" });
  });
  // footer li
  $(".footer_bottom ul p").on("mouseenter", function () {
    $(this).css({ opacity: "100%", "font-weight": "bold" });
  });
  $(".footer_bottom ul p").on("mouseleave", function () {
    $(this).css({ opacity: "80%", "font-weight": "normal" });
  });
});
