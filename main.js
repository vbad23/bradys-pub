var date = new Date();
var year = date.getFullYear();

function selectAppetizers() {
  $(".food-category").css("display", "none");
  $(".appetizers").css("display", "block");
  $(".food-nav-item").css({
    "color": "#FFF",
    "background-color": "transparent"
  });
  $("#appetizers-nav").css({
    "color": "#000",
    "background-color": "#FFF"
  });
}

function selectBurgers() {
  $(".food-category").css("display", "none");
  $(".burgers").css("display", "block");
  $(".food-nav-item").css({
    "color": "#FFF",
    "background-color": "transparent"
  });
  $("#burgers-nav").css({
    "color": "#000",
    "background-color": "#FFF"
  });
}

function selectSandwiches() {
  $(".food-category").css("display", "none");
  $(".sandwiches").css("display", "block");
  $(".food-nav-item").css({
    "color": "#FFF",
    "background-color": "transparent"
  });
  $("#sandwiches-nav").css({
    "color": "#000",
    "background-color": "#FFF"
  });
}

function selectSalads() {
  $(".food-category").css("display", "none");
  $(".salads").css("display", "block");
  $(".food-nav-item").css({
    "color": "#FFF",
    "background-color": "transparent"
  });
  $("#salads-nav").css({
    "color": "#000",
    "background-color": "#FFF"
  });
}

function selectSpecialties() {
  $(".food-category").css("display", "none");
  $(".specialties").css("display", "block");
  $(".food-nav-item").css({
    "color": "#FFF",
    "background-color": "transparent"
  });
  $("#specialties-nav").css({
    "color": "#000",
    "background-color": "#FFF"
  });
}

function checkSection() {
  $(".nav-item").css("color", "rgba(255, 255, 255, 0.5");
  if($(".home").is(':visible')) {
    $(".nav-home").css("color", "white");
  }
  if($(".about").is(':visible')) {
    $(".nav-about").css("color", "white");
  }
  if($(".menu").is(':visible')) {
    $(".nav-menu").css("color", "white");
  }
  if($(".hours").is(':visible')) {
    $(".nav-hours").css("color", "white");
  }
}

$(function() {

  // Default
  $(".section").css("display", "none");
  $(".home").css("display", "flex");
  selectAppetizers();
  checkSection();

  $(".footer").text("© " + year + " Brady's Pub. All Rights Reserved. This website and all images were created by Vikram Badarinath.");

  // Nav bar functionality
  $(".nav-home").on("click", function() {
    if(!$(".home").is(':visible')) {
        $(".section").fadeOut(200);
        setTimeout(function() {
          $(".section").css("display", "none");
          $(".home").css("display", "flex");
          checkSection();
        }, 200);
      }
  });

  $(".nav-about").on("click", function() {
    if(!$(".about").is(':visible')) {
        $(".section").fadeOut(200);
        setTimeout(function() {
          $(".section").css("display", "none");
          $(".about").css("display", "flex");
          checkSection();
        }, 200);
      }
  });

  $(".nav-menu").on("click", function() {
    if(!$(".menu").is(':visible')) {
        $(".section").fadeOut(200);
        setTimeout(function() {
          $(".section").css("display", "none");
          $(".menu").css("display", "flex");
          checkSection();
        }, 200);
      }
  });

  $(".nav-hours").on("click", function() {
    if(!$(".hours").is(':visible')) {
        $(".section").fadeOut(200);
        setTimeout(function() {
          $(".section").css("display", "none");
          $(".hours").css("display", "flex");
          checkSection();
        }, 200);
      }

  });

  // Menu navigation
  $("#appetizers-nav").on("click", function() {
    selectAppetizers();
  });

  $("#burgers-nav").on("click", function() {
    selectBurgers();
  });

  $("#sandwiches-nav").on("click", function() {
    selectSandwiches();
  });

  $("#salads-nav").on("click", function() {
    selectSalads();
  });

  $("#specialties-nav").on("click", function() {
    selectSpecialties();
  });
});
