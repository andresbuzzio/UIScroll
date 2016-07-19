$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 200) {
        $('.box1').css("visibility","visible");
        $('.box1').addClass('magictime slideLeftRetourn');
    }
});
