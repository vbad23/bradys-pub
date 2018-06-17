var date = new Date();
var year = date.getFullYear();

$(function() {
  // $(".over-21").on("click", function() {
    $(".verify").css("display", "none");
    $(".site").css("display", "block");
    $(".section").css("display", "none")
    $(".home").css("display", "flex");
  // });
  $(".footer").text("© " + year + " Brady's Pub. All Rights Reserved. This website and all images were created by Vikram Badarinath.");

  // Nav bar functionality
  $(".nav-home").on("click", function() {
      $(".section").fadeOut(200);
      setTimeout(function() {
        $(".section").css("display", "none");
        $(".home").css("display", "flex");
      }, 200)
  })

  $(".nav-about").on("click", function() {
      $(".section").fadeOut(200);
      setTimeout(function() {
        $(".section").css("display", "none");
        $(".about").css("display", "flex");
      }, 200)
  })

  $(".nav-menu").on("click", function() {
      $(".section").fadeOut(200);
      setTimeout(function() {
        $(".section").css("display", "none");
        $(".menu").css("display", "flex");
      }, 200)
  });

  $(".nav-hours").on("click", function() {
      $(".section").fadeOut(200);
      setTimeout(function() {
        $(".section").css("display", "none");
        $(".hours").css("display", "flex");
      }, 200)
  });

  // Menu navigation
  $("#burgers-nav").on("click", function() {
    $(".food-category").css("display", "none");
    $(".burgers").css("display", "block");
    $(".food-nav-item").css({"color": "#FFF", "background-color": "transparent"});
    $("#burgers-nav").css({"color": "#000", "background-color": "#FFF"});
  });

  $("#sandwiches-nav").on("click", function() {
    $(".food-category").css("display", "none");
    $(".sandwiches").css("display", "block");
    $(".food-nav-item").css({"color": "#FFF", "background-color": "transparent"});
    $("#sandwiches-nav").css({"color": "#000", "background-color": "#FFF"});
  });

  $("#specialties-nav").on("click", function() {
    $(".food-category").css("display", "none");
    $(".specialties").css("display", "block");
    $(".food-nav-item").css({"color": "#FFF", "background-color": "transparent"});
    $("#specialties-nav").css({"color": "#000", "background-color": "#FFF"});
  });

  $("#sides-nav").on("click", function() {
    $(".food-category").css("display", "none");
    $(".sides").css("display", "block");
    $(".food-nav-item").css({"color": "#FFF", "background-color": "transparent"});
    $("#sides-nav").css({"color": "#000", "background-color": "#FFF"});
  });
});
