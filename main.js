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

$(function() {
  // $(".over-21").on("click", function() {
  $(".verify").css("display", "none");
  $(".site").css("display", "block");
  $(".section").css("display", "none");
  $(".home").css("display", "flex");
  selectAppetizers();

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
