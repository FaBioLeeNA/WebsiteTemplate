import $ from "jquery";

export function navigation() {
  const logo = $(".logo");
  const pNav = $(".primary-nav");
  const li = $(".primary-nav li");
  pNav.css("height", logo.height());
  li.css("margin-top", (pNav.height() - li.height()) / 2 + "px");
}

export function projects() {
  $(".luvtalk-project").css("height", $(".luvtalk-project").width());
  $(".luvtalk-project h3").css(
    "padding-top",
    ($(".luvtalk-project").height() -
      $(".luvtalk-project h3").height() -
      $(".luvtalk-project .row").outerHeight()) /
      2
  );
  $(".personal-website-project").css(
    "height",
    $(".personal-website-project").width()
  );
  $(".personal-website-project h3").css(
    "padding-top",
    ($(".personal-website-project").height() -
      $(".personal-website-project h3").height() -
      $(".personal-website-project .row").outerHeight()) /
      2
  );
  $(".strike-zone-project").css("height", $(".strike-zone-project").width());
  $(".strike-zone-project h3").css(
    "padding-top",
    ($(".strike-zone-project").height() -
      $(".strike-zone-project h3").height() -
      $(".strike-zone-project .row").outerHeight()) /
      2
  );
  // var doit;
  // $(window).resize(function () {
  //   clearTimeout(doit);
  //   doit = setTimeout(projects, 500);
  // });
}
