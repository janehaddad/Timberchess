$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(document).ready(function () {
  $("#tab-1").click(function () {
    $(this).addClass("active ");
    $("#tab-2").removeClass("active ");
    $("#tab-3").removeClass("active ");
    $("#tab-content-1").css("display", "block");
    $("#tab-content-2").css("display", "none");
    $("#tab-content-3").css("display", "none");
  });
  $("#tab-2").click(function () {
    $(this).addClass("active ");
    $("#tab-1").removeClass("active ");
    $("#tab-3").removeClass("active ");
    $("#tab-content-2").css("display", "block");
    $("#tab-content-1").css("display", "none");
    $("#tab-content-3").css("display", "none");
  });
  $("#tab-3").click(function () {
    $(this).addClass("active ");
    $("#tab-2").removeClass("active ");
    $("#tab-1").removeClass("active ");
    $("#tab-content-3").css("display", "block");
    $("#tab-content-2").css("display", "none");
    $("#tab-content-1").css("display", "none");
  });
});
(function () {
  "use strict";
  const forms = document.querySelectorAll(".requires-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
