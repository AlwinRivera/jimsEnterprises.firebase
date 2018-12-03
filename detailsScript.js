if($(window).width() > 1000) {
 $('#details').addClass('pull-left'); 
 $('#details1').addClass('pull-right');
 $('#jimsEmail').css({"margin-right": "198px"}); 
}
else{
 $('#details').removeClass('pull-left'); $('#details1').removeClass('pull-right');
$('#details').addClass('text-center');
$('#details1').addClass('text-center');
$('#details1').css({"margin-top": "-12px"});
$('.jumbotron').css({"background-position": "left 16.5em","background-size": "100% 877px"});
 }
