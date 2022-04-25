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