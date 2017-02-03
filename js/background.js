$(document).ready(function() {

function changeBg () {
  var num = Math.random() * 6;
  num = Math.round(num);
  $('.hero').css('background-image', 'url(img/hero-bg-'+ num +'.jpg)' );
}

jQuery(document).ready(function(){
     setInterval(changeBg, 6000);
});
});
