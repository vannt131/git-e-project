$(document).ready(function (){
    $('#grid').click(function (){
        $('.grid-list li').removeClass('selected');
        $(this).addClass('selected');
        $('.product-results div').removeClass('grid-list-active');
        $('.grid-products').addClass('grid-list-active');
    });
    $('#list').click(function (){
        $('.grid-list li').removeClass('selected');
        $(this).addClass('selected');
        $('.product-results div').removeClass('grid-list-active');
        $('.list-products').addClass('grid-list-active');
    });
});

function handleSelect(elm)
{
    window.location = elm.value;
}