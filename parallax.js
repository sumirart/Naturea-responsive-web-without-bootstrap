$(window).scroll(function(e){
    parallax();
});

function parallax(){
    let scroll = $(window).scrollTop();
    
    $('.parallax--bg').css('background-position', 'center ' + (scroll * 0.5) + 'px');

    if(scroll < 400){
        $('.parallax--box').css('top', (-64 + (scroll * 0.15)) + 'px');
    }
}