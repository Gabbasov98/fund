$(document).ready(function(){
  $("#menu2").click(function(){
    $(".fixed-menu__item-hiden").addClass("click");

    setTimeout((function(){
      $(".fixed-menu__item-hiden").removeClass("click");
    }),2000);
  });

  $(".current__top-nav-btn").click(function () {
    // $(this).css("display","none");
    $(".current__top-nav-btn-hiden").css("display","block");
  });

  $(".current__top-nav-btn-hidden").click(function () {
    // $(".current__top-nav-btn").css("display","block");
    $(".current__top-nav-btn-hiden").css("display","none");
  });
});
