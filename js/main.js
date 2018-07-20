$(document).ready(function(){

//mobile_menu

$( '.mobile_menu' ).click( function() { 
		$(this).toggleClass('active'); 
        $('header .menu').slideToggle(300);
        
    });
 



// submenu
    
    $('.menu li').click(function(e){
		if($(this).hasClass('active')){return;}
        e.preventDefault();
        $('.submenu').slideUp('300');
		$('.menu li').removeClass('active');
		$(this).addClass('active');
        $(this).find('.submenu').slideToggle('300');
    }); 
    
// slider  
    var slide=20;
    var slides=5;
        function setslide(counter){
            if(counter>=slides) counter=0;
            slide=counter;
            $('.text_long').css('margin-left','-'+counter+'00%');
            $('.animation_wr .animation').removeClass('active');
            $('.slider_wr .point').removeClass('active');
            $('.slider_wr .point').eq(counter).addClass('active');

            var $el=$('.animation_wr .animation').eq(counter);
            $el.addClass('active');
            var $svg = $el.find('svg').drawsvg({duration:700,stagger:12});
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
    var interval=setInterval(setslide_next,5000);
    })
    
// services slider
     
    $('.services').click(function() {  
		$('.services').removeClass('active');
		$('.slider2_wr').css('margin-left','-'+$(this).index()+'00%'); 
		$('.slider2_wr .slide').css('height','500px');
		$('.slider2_wr .slide').eq($(this).index()).css('height','auto');
		$(this).addClass('active');
    });
    
// showing house lines
    
    $('.links li').hover(function(e) { 
        e.preventDefault();
        $('.lines').removeClass('active');
        $('.lines_wr .lines').eq($(this).index()).addClass('active');
    }); 
});