// slide-show
$(document).ready(function next_slide() {
    $('#btn-next').click(function(event) {
        var slide_sau = $('.active').next();
        if(slide_sau.length!=0){
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
        }else{
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
        }
    });
});

$(document).ready(function prev_slide() {
    $('#btn-prev').click(function(event) {
        var slide_sau = $('.active').next();
        if(slide_sau.length!=0){
            $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
                $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
            });
            slide_sau.addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
                $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
            });
        }else{
            $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
                $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
            });
            $('.slide:first-child').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
                $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
            });
        }
    });
});
setInterval(function (){
    var slide_sau = $('.active').next();
    if(slide_sau.length!=0){
        $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
            $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
        });
        slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
            $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
        });
    }else{
        $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
            $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
        });
        $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
            $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
        });
    }
},5000);


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


$(document).ready(function (){
    $('.tes-thubnail').click(function (){
        $('.testimonial div').removeClass('tes-active');
        $(this).toggleClass('tes-active');
    });
});

// search
$(document).ready(function (){
    $('.icon-search').click(function (event){
        $(this).children('i').toggleClass('fa fa-times fa fa-search');
        $('.search-btn').toggleClass('search-btn-show search-btn search-btn');
    });
});



// back-to-top
$('.back-to-top').click(function (event){
    $('html,body').animate({
        scrollTop: 0,
    },1500)
});


$('input.input-qty').each(function() {
    var $this = $(this),
        qty = $this.parent().find('.is-form'),
        min = Number($this.attr('min')),
        max = Number($this.attr('max'))
    if (min == 0) {
        var d = 0
    } else d = min
    $(qty).on('click', function() {
        if ($(this).hasClass('minus')) {
            if (d > min) d += -1
        } else if ($(this).hasClass('plus')) {
            var x = Number($this.val()) + 1
            if (x <= max) d += 1
        }
        $this.attr('value', d).val(d)
    })
})

// show-password
$(document).ready(function (){
    $('.eye').click(function (){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa fa-eye-slash fa fa-eye');
        if ($(this).hasClass('open')){
            $('.show-password').attr('type','text');
        }else{
            $('.show-password').attr('type','password');
        }
    });
});

// payment-fixed
$(document).ready(function (){
    var client_height = document.getElementById('client-height').clientHeight;
    var checkout_fixed = $('.total-payment-fixed');
    console.log(client_height);
    $(window).scroll(function (){
        if($(this).scrollTop() > client_height){
            checkout_fixed.removeClass('total-payment-fixed');
            checkout_fixed.addClass('total-payment');
        }else{
            checkout_fixed.addClass('total-payment-fixed');
            checkout_fixed.removeClass('total-payment');
        }
    })
});