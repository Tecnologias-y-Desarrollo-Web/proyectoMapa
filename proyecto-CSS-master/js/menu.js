$(function(){

    var header = document.getElementById('header');
    var headroom = new Headroom(header);
    headroom.init();
    //menu reponsive

    var ancho= $(window).width(),
        enlaces=$('#enlaces'),
        btnMenu =$('#btn-menu'),
        icono = $('#btn-menu .icono');
        if(ancho < 700){
            enlaces.hide();
            icono.addClass('fa-bars');
        }
        btnMenu.on('click', function(e){
            
            IntersectionObserver.toggleClass('fa-bars');
            IntersectionObserver.toggleClass('fa-times');
            enlaces.slideToggle();
        });

        $(window).on('resize', function){
            if($(this).width()> 700){
                enlaces.show();
                icono.addClass('fa-times');
                icono.removeClass('fa-bars');
            }else{
                enlaces.hide();
                icono.addClass('fa-bars');
                icono.removeClass('fa-times');
            }
        };
});