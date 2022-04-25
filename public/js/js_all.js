jQuery(document).ready(function($) {
    var TopFixMenu = $(".header");
    var back_to_top = $(".back-to-top");
    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            TopFixMenu.addClass('fix-header');
            back_to_top.addClass('back-to-top-mod');
        }else{
            TopFixMenu.removeClass('fix-header');
            back_to_top.removeClass('back-to-top-mod');
        }
    })
});

// back-to-top
$('.back-to-top').click(function (event){
    $('html,body').animate({
        scrollTop: 0,
    },1500)
});
