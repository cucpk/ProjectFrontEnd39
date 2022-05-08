$(document).ready(function(){
    $('.mt').click(function(){
        $('.lichtrinh').removeClass('block');
        $('.mota').addClass('block').removeClass('none');
        
    })

    $('.lt').click(function(){
        $('.mota').removeClass('block');
        $('.lichtrinh').addClass('block').removeClass('none');
        
    })
})