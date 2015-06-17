$(document).ready(function()
{

	//nav-toogle
	$(function()
	{
	    $(document).on('click', '.nav__js-menu', function()
	    { 	    	
	    	$('.nav__js-list').slideToggle("slow");    	                                                                 
	    });
	});


	//////////////////////////////////////////////////////////////////////////////
	//sub-menu
	$(function()
	{
	    $(document).on('mouseenter', '.header__nav-item', function()
	    { 	    	
	    	$(this).children('.header__sub-menu').slideDown(); 	    	                                                                 
	    });

	    $(document).on('mouseleave', '.header__nav-item', function()
	    { 
	    	$(this).children('.header__sub-menu').slideUp(); 	                                                                  
	    });
	});


	

	//search
	$(function()
	{
	    $(document).on('click', '.js-search-form__open', function()
	    { 
	    	var toggleWidth = "290px";
	    	if ($(window).width() <= '640')
	    	{
	    		toggleWidth = "210px"
	    	}
	    	else
	    	{
				toggleWidth = "420px"
	    	}
	    	$('.js-search-form__open').css('z-index','0');
	    	$('.js-search-form form').animate({ width: toggleWidth }); 	    		    	        			
	    });	

        $(document).on('click', '.js-search-form__close', function()
        { 
        	var toggleWidth = "40px";
        	$('.js-search-form__open').css('z-index','2');
        	$('.js-search-form form').animate({ width: toggleWidth }); 	    		    	        			
        });	
	});	

	//popup
	$(function()
	{
	    $(document).on('click', '.round-links__link--msg, .popup__close', function()
	    { 	    	
	    	$(".popup").slideToggle("fast");                                                                    
	    });	
	});	

	//questions carusel
	$(function()
	{
	    $(document).on('click', '.questions__question', function()
	    { 	    	
	    	if($(this).hasClass("questions__question--active"))
	    	{
	    		$(this).removeClass("questions__question--active");
	    	}
	    	else
	    	{
	    		$(this).addClass("questions__question--active");
	    	}
	    });	
	});		
}); 