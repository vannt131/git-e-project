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

// testimonial
$(document).ready(function (){
    $('.tes-thubnail').click(function (){
        $('.testimonial div').removeClass('tes-active');
        $(this).toggleClass('tes-active');
    });
});


const testimonial_text_1 = 'Be aggressive with an idea, problem, or mistake that you want to make right. If you don\'t have enough passion from the beginning, you\'ll never make it to the end.';
const testimonial_text_2 = 'I always wear glasses every day. Because if you take off your glasses, the world is a flat surface. 30 meters away, man and woman as one. 50 meters away, people and things have no distinction.';
const testimonial_text_3 = 'Even without glasses, I can still see in the sea of people. And if you wear more glasses, even if I sit next to you. You don\'t see me either.';
const testimonial_text_4 = 'When I long for the world, I will wear glasses to see it clearly. When I\'m frustrated with the world, I take off my glasses to simplify things.';

var text = document.getElementById('testimonial-text');
function testimonial_text(tes_text){
    text.innerText = tes_text;
}
