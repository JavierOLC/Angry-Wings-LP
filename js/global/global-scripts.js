//! LAST UPDATED: May 14, 2019

// SCROLL TO TOP BUTTON 1
$(window).scroll(function() {
  if ($(this).scrollTop() > 500) {
    $(".scroll-top1").fadeIn(200);
  } else {
    $(".scroll-top1").fadeOut(200);
  }
});
$(".scroll-top1").click(function() {
  $("body,html").animate(
    {
      scrollTop: 0
    },
    50
  );
});
// SCROLL TO TOP BUTTON 1

// AUTOHIDE NAVBAR ON DESKTOP
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("menu2-wrapper").style.top = "0";
  } else {
    document.getElementById("menu2-wrapper").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};
// AUTOHIDE NAVBAR ON DESKTOP

