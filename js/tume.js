$(function(){
    $('.menu .td-chap.c1:nth-child(1) a').on('click',function(event){
        event.preventDefault();
        /* Act on the event */

        $('html').animate({scrollTop: $('.td-b1').offset().top},400);
    });

    $('.menu .td-chap.c2:nth-child(2) a').on('click',function(event){
        event.preventDefault();
        /* Act on the event */

        $('html').animate({scrollTop: $('.td-b2').offset().top},400);
    });

    $('.menu .td-chap.c3:nth-child(3) a').on('click',function(event){
        event.preventDefault();
        /* Act on the event */

        $('html').animate({scrollTop: $('.td-b3').offset().top},400);
    });


    $('.home').on('click',function(event){
        event.preventDefault();
        /* Act on the event */

        $('html').animate({scrollTop:0},400);
    });
});
