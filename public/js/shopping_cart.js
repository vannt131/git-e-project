// payment-fixed
$(document).ready(function (){
    var client_height = document.getElementById('client-height').clientHeight;
    var checkout_fixed = $('.total-payment-fixed');
    console.log(client_height);
    $(window).scroll(function (){
        if($(this).scrollTop() > client_height-150){
            checkout_fixed.removeClass('total-payment-fixed');
            checkout_fixed.addClass('total-payment');
        }else{
            checkout_fixed.addClass('total-payment-fixed');
            checkout_fixed.removeClass('total-payment');
        }
    })
});

$(document).ready(function (){
    $('.color-item').click(function (){
        $('.product .product-color .color-item').removeClass('product-color-active');
        $(this).toggleClass('product-color-active');
    });
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