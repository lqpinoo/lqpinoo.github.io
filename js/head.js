$( document ).ready(function() {
$('.navbar-default').addClass('transparent');
$('.navbar-default .navbar-nav > li > a').css('color', 'white');
$('.navbar-default .navbar-nav > li > a:hover').css('color', '#1FBAD6');
});
$(window).scroll(function() {
  var win = $(document).scrollTop()
  if (win > 120) {
    $('.navbar-default').removeClass('transparent');
    $('.navbar-default .navbar-nav > li > a').css('color', 'black');
    $('.navbar-default .navbar-nav > li > a:hover').css('color', '#1FBAD6');
    $('#logal').attr("src","img/logo-black.png");
  } else  {
    $('.navbar-default').addClass('transparent');
    $('.navbar-default .navbar-nav > li > a').css('color', 'white');
    $('#logal').attr("src","img/logo-white.png");
  }

});
