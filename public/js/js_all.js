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
    //selector đến menu cần làm việc
    var TopFixMenu = $(".header");
    var back_to_top = $(".back-to-top");
    // dùng sự kiện cuộn chuột để bắt thông tin đã cuộn được chiều dài là bao nhiêu.
    $(window).scroll(function(){
        // Nếu cuộn được hơn 150px rồi
        if($(this).scrollTop()>200){
            // Tiến hành show menu ra
            TopFixMenu.addClass('fix-header');
            back_to_top.addClass('back-to-top-mod');
        }else{
            // Ngược lại, nhỏ hơn 150px thì hide menu đi.
            TopFixMenu.removeClass('fix-header');
            back_to_top.removeClass('back-to-top-mod');
        }}
    )
});

var ttm = document.getElementById("testimonial-text");
var active_img1 = document.getElementById("active-img1");
var active_img2 = document.getElementById("active-img2");
var active_img3 = document.getElementById("active-img3");
var active_img4 = document.getElementById("active-img4");
var active_text1 = document.getElementById("active-text1");
var active_text2 = document.getElementById("active-text2");
var active_text3 = document.getElementById("active-text3");
var active_text4 = document.getElementById("active-text4");
function testimonial_1 (){
    ttm.innerText = "Be aggressive with an idea, problem, or mistake that you want to make right. If you don't have enough passion from the beginning, you'll never make it to the end.";

    active_img1.style.border = "3px solid #ed0f0f"; active_img1.style.transform = "scale(1.2)";
    active_text1.style.color = "#ed0f0f";
    active_img2.style.border = "none"; active_img2.style.transform = "scale(1)";
    active_text2.style.color = "black";
    active_img3.style.border = "none"; active_img3.style.transform = "scale(1)";
    active_text3.style.color = "black";
    active_img4.style.border = "none"; active_img4.style.transform = "scale(1)";
    active_text4.style.color = "black";
}
function testimonial_2 (){
    ttm.innerText = "Dreams don't come true just because you dream them. Hard work makes things work. Only hard work makes a change.";

    active_img1.style.border = "none"; active_img1.style.transform = "scale(1)";
    active_text1.style.color = "black";
    active_img2.style.border = "3px solid #ed0f0f"; active_img2.style.transform = "scale(1.2)";
    active_text2.style.color = "#ed0f0f";
    active_img3.style.border = "none"; active_img3.style.transform = "scale(1)";
    active_text3.style.color = "black";
    active_img4.style.border = "none"; active_img4.style.transform = "scale(1)";
    active_text4.style.color = "black";
}
function testimonial_3 (){
    ttm.innerText = "Do what you love, success will follow. Passion is the fuel behind a solid career.";

    active_img1.style.border = "none"; active_img1.style.transform = "scale(1)";
    active_text1.style.color = "black";
    active_img2.style.border = "none"; active_img2.style.transform = "scale(1)";
    active_text2.style.color = "black";
    active_img3.style.border = "3px solid #ed0f0f"; active_img3.style.transform = "scale(1.2)";
    active_text3.style.color = "#ed0f0f";
    active_img4.style.border = "none"; active_img4.style.transform = "scale(1)";
    active_text4.style.color = "black";
}
function testimonial_4 (){
    ttm.innerText = "I was lucky because I never gave up looking. Do you often give up early? Or are you also willing to pursue your fortune with determination?";

    active_img1.style.border = "none"; active_img1.style.transform = "scale(1)";
    active_text1.style.color = "black";
    active_img2.style.border = "none"; active_img2.style.transform = "scale(1)";
    active_text2.style.color = "black";
    active_img3.style.border = "none"; active_img3.style.transform = "scale(1)";
    active_text3.style.color = "black";
    active_img4.style.border = "3px solid #ed0f0f"; active_img4.style.transform = "scale(1.2)";
    active_text4.style.color = "#ed0f0f";
}

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