$(document).ready(function(){
    var slide=20;
    var slides=5;
        function setslide(counter){
            $('.slider_wr .point').removeClass('active');
            $('.slider_wr .point').eq(counter).addClass('active');
            if(counter>=slides) counter=0;
            slide=counter;
            $('.text_long').css('margin-left','-'+counter+'00%');
            $('.animation_wr .animation').removeClass('active');

            var $el=$('.animation_wr .animation').eq(counter);
            $el.addClass('active');
            var $svg = $el.find('svg').drawsvg({duration:500,stagger:50});
            $svg.drawsvg('progress', 0);
            $svg.drawsvg('animate');
        }
        function setslide_next(){setslide(slide+1);}


    $(document).ready(function(){
        $('.slider_wr .point').click(function(){
            clearInterval(interval);
            setslide($(this).parent().children().index($(this)));
            //$(this).parent().find('.point').removeClass('active');
            //$(this).addClass('active');
        });
    setslide(0);
    var interval=setInterval(setslide_next,6000);

    })
    
    var slideNow = 1;   
    var slideCount = console.log($('#slidewrapper .slide').length);
    var navBtnId = 0;
    
    $('.services').click(function() {   
            navBtnId = $(this).index();
                $('.slider2_wr').css(
                    'margin-left','-'+navBtnId+'00%'); 
            $('html, body').stop().animate({
                scrollTop: $('.slide .about').offset().top
            }, 500);
    });
});