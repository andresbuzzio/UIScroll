$(window).scroll(function() {
    var height = $(window).scrollTop();

    if(height  > 100) {
        $('.box1').css("visibility","visible");
        $('.box1').addClass('magictime swashIn');
    }

    if(height  > 200) {
        $('.box2').css("visibility","visible");
        $('.box2').addClass('magictime swashIn');
    }

    if(height  > 350) {
        $('.box3').css("visibility","visible");
        $('.box3').addClass('magictime perspectiveRightRetourn');
    }

    if(height  > 500) {
        $('.box4').css("visibility","visible");
        $('.box4').addClass('magictime perspectiveLeftRetourn');
    }
});
