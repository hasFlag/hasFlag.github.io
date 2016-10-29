// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
  while (length--) {
    method = methods[length];
    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
// Place any jQuery/helper plugins in here.
window.onhashchange = function(event) {
  var $introText = document.getElementById('intro-text'),
    $discoverText = document.getElementById('discover-text'),
    $body = document.getElementsByTagName('body');
  if (location.hash === '#discover') {
    $body[0].classList.add('discover');
    $introText.classList.add('visuallyhidden');
    $discoverText.classList.remove('visuallyhidden');
  } else {
    $body[0].classList.remove('discover');
    $introText.classList.remove('visuallyhidden');
    $discoverText.classList.add('visuallyhidden');
  }
};
window.onhashchange();
