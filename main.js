var date = new Date();
var year = date.getFullYear();

$(function() {
  // $(".over-21").on("click", function() {
    $(".verify").css("display", "none");
    $(".site").css("display", "block");
    $(".section").css("display", "none")
    $(".home").css("display", "flex");
  // });
  $(".footer").text("© " + year + " Brady's Pub. All Rights Reserved. Website created by Vikram Badarinath");

  // Nav bar functionality
  $(".nav-home").on("click", function() {
      $(".section").fadeOut(200);
      setTimeout(function() {
        $(".section").css("display", "none")
        $(".home").css("display", "flex");
      }, 200)
  })

  $(".nav-about").on("click", function() {
      $(".section").fadeOut(200);
      setTimeout(function() {
        $(".section").css("display", "none")
        $(".about").css("display", "flex");
      }, 200)
  })

  $(".nav-menu").on("click", function() {
      $(".section").fadeOut(200);
      setTimeout(function() {
        $(".section").css("display", "none")
        $(".menu").css("display", "flex");
      }, 200)
  })

  $(".nav-hours").on("click", function() {
      $(".section").fadeOut(200);
      setTimeout(function() {
        $(".section").css("display", "none")
        $(".hours").css("display", "flex");
      }, 200)
  })
});
