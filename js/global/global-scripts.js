//! LAST UPDATED: May 17, 2019

/* Vanilla JavaScript Smooth Scroll 
    Maximillian Heth on codepen.io:
    https://codepen.io/maxxheth/pen/oVYRdm 
*/
document.addEventListener('click', function(e) {
  if (e.target.tagName !== 'A') return;  
  if ((e.target.href && e.target.href.indexOf('#') != -1) && ((e.target.pathname == location.pathname) || ('/' + e.target.pathname == location.pathname)) && (e.target.search == location.search)) {
    scrollAnchors(e, e.target);    
  }  
});
			function scrollAnchors(e, respond = null) {
        function distanceToTop(el) { 
          return Math.floor(el.getBoundingClientRect().top); 
        }
        
				e.preventDefault();
				var targetID = (respond) ? respond.getAttribute('href') : this.getAttribute('href');
			var targetAnchor = document.querySelector(targetID);
				if (!targetAnchor) return;
				var originalTop = distanceToTop(targetAnchor);
				window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
				var checkIfDone = setInterval(function() {
					var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
					if (distanceToTop(targetAnchor) === 0 || atBottom) {
						targetAnchor.tabIndex = '-1';
						targetAnchor.focus();
          
            if ('history' in window) {
						    window.history.pushState('', '', targetID);
              } else {
                window.location = targetID;
              }
						clearInterval(checkIfDone);
					}
				}, 100);
      }
/* Vanilla JavaScript Smooth Scroll */

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

