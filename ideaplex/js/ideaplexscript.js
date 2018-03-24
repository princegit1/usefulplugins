// All Ideas page js
var ccounter = 1;
$(window).load(function() {
  $("body").removeClass("preload");
});
$(document).ready(function(){
$('.imgbox a').click(function(){
  $('.imgbox .tooltip-popup').removeClass('tooltip-active');
  $(this).next('.tooltip-popup').show().addClass('tooltip-active');
});

$('.alphabet-slider ul li a').click(function(){
  $('.imgbox .tooltip-popup').removeClass('tooltip-active');
  $(this).next('.tooltip-popup').show().addClass('tooltip-active');
  return false;
});


$('.close-popup').click(function(){
$(this).parent().parent('div.tooltip-popup').removeClass('tooltip-active');
});

$("ul.hometab li").click(function(){
		$("ul.hometab li").children("a").removeClass("active")
		$(this).children("a").addClass("active")
		for(var i=0;i<=10;i++){
			$(".tabcontent"+i).hide()}
		$(".tabconten"+$(this).children("a").attr("rel")).fadeIn(1000);
		
		})

});


$(document).ready(function(){
	$("a.seecomment").click(function(){
		$('.related_comment').slideUp();
		$('a.seecomment').show();
		$(this).parent().prev().slideToggle()
		$(this).hide();
		})
});

// Contact page
$(document).ready(function(e) {
    $("a.ipadnav").click(function(){
		$(this).next().slideToggle();
		$(".nav").mouseleave(function(){$(".nav").slideUp('fast')})
		})
		
if($(window).width() < 480){	
	$("input.searchbtn").click(function(){
		$('.head_search input.hid').slideToggle();
		//$('#header .head_search').css('width','89%')
		
		});
}
});

// IDEASTORE JS

//$(document).ready(function(){
// var clen = $('.idea_box_cont ul li').length;
// var cheght = $('.idea_box_cont ul li').height()+20;
// var finalmove = cheght+2
// var finallen = clen/2
// var final2 = Math.ceil(finallen);
// //alert(final2);
// var ccounter = 1;
//  $('.see_more').click(function() {
//        if (ccounter < final2-2) {
//			$('.ideastore_h .see_more_h .see_less').css('opacity', '1')
//            $('.idea_box_cont ul').animate({ top: '-='+finalmove});
//             ccounter += 1;
//           //$('.see_more').show();
//        } else {
//            $('.see_more').css('opacity', '0.3')
//             $('.see_less').show();
//        }
//    });
//        $('.see_less').click(function() {
//        if (ccounter == 1) {
//            $('.see_more').show();
//             $('.see_less').css('opacity', '0.3')
//        } else {
//            $('.idea_box_cont ul').animate({top: '+='+finalmove});
//			$('.see_more').css('opacity', '1')
//            ccounter -= 1;
//           //$('.see_less').show();
//        }
//    });
//
//   
//});




// search page js

$(document).ready(function(){
 var clen = $('.idea_box_cont ul li').length;
 var cheght = $('.idea_box_cont ul li').height()+17;
 var finalmove = cheght+3
 var finallen = clen/3
 var final2 = Math.ceil(finallen);
 //alert(final2);
 var ccounter = 1;
  $('.see_more1').click(function() {
        if (ccounter < final2-2) {
			$('.see_more_h1 .see_less1').css('opacity', '1');
            $('.idea_box_cont ul').animate({ top: '-='+finalmove});
                       ccounter += 1;
           //$('.see_more1').show();
        } else {
            $('.see_more1').css('opacity', '0.3')
             $('.see_less1').show();
        }
    });
        $('.see_less1').click(function() {
        if (ccounter == 1) {
            $('.see_more1').show();
             $('.see_less1').css('opacity', '0.3')
        } else {
            $('.idea_box_cont ul').animate({top: '+='+finalmove});
			$('.see_more1').css('opacity', '1')
            ccounter -= 1;
          // $('.see_less1').show();
        }
    });
   
});

// Themeplex page js

$(document).ready(function(){
 var clen = $('.alphabet-slider > ul > li').length;
 var cheght = $('.alphabet-slider > ul > li').height();
 var finalmove = cheght+3
 var finallen = clen/6
 var final2 = Math.ceil(finallen);
 //alert(final2);
 var ccounter = 1;
  $('.alpha-top').click(function() {
        if (ccounter < final2-2) {
            $('.alphabet-slider > ul').animate({ top: '-='+finalmove});
                       ccounter += 1;
           //$('.alpha-top').show();
        } else {
			$('.alpha-top').css('opacity', '0.5');
                       $('.alpha-down').css('opacity', '1');
        }
    });
        $('.alpha-down').click(function() {
        if (ccounter == 1) {
            $('.alpha-top').css('opacity', '1');
                       $('.alpha-down').css('opacity', '0.5');
        } else {
            $('.alphabet-slider > ul').animate({top: '+='+finalmove});
            ccounter -= 1;
           //$('.alpha-down').show();
        }
    });
    
});

// video page js

$(document).ready(function(e) {
    $(".top_video_icon ul li a").click(function(){
		$(this).next().slideToggle()
		$(".video_red_tooltip").mouseleave(function(){
			$(this).slideUp() })
		})

/********************Related Videos******************************/
/*var photolen  = $('.realate_videos_slider > ul > li').length;
	var twidth = $('.realate_videos_slider > ul > li').width();
	var fwidth = twidth*(photolen+15);
	$('.realate_videos_slider > ul').css('width', fwidth);
	var counters = 1;
	$('.next').click(function(){
		if(counters < photolen-4)
		{
				$('.realate_videos_slider > ul').animate({
					left : '-=155'
				});
				 counters += 1;
				
				$('.prev').css('opacity', '1');
		}
		else{
			$('.next').css('opacity', '0.5');
			
		}
	});
	$('.prev').click(function(){
		if(counters == 1)
		{
				$('.prev').css('opacity', '0.5');
		}
		else{
			$('.realate_videos_slider > ul').animate({
					left : '+=155'
				});
			counters -= 1;
			$('.next').css('opacity', '1');
		}
	});
    */
/********************Related Videos******************************/

		$('.related_videos ul li img').click(function(){ 
  $('.tooltip-popup').removeClass('tooltip-active');
  $(this).next('.tooltip-popup').show().addClass('tooltip-active');

});
$('.close-popup').click(function(){
$(this).parent().parent('div.tooltip-popup').removeClass('tooltip-active');
});



		$('.related_videos_v ul li img').click(function(){ 
  $('.tooltip-popup-v').removeClass('tooltip-active-v');
  $(this).next('.tooltip-popup-v').show().addClass('tooltip-active-v');

});
$('.close-popup-v').click(function(){
$(this).parent().parent('div.tooltip-popup-v').removeClass('tooltip-active-v');
});



$(".theme-menu ul li").click(function(){
	$(".theme-menu ul li a").removeClass('active')
	$(this).children("a").addClass('active')	
	for(var i=0;i<=10;i++){
		$("#themeplex"+i).hide();
		}
		$("#themeple"+$(this).children("a").attr("rel")).show();
		
	
	
	})



});





// Desktop version 
$(document).ready(function(){
if($(window).width() < 480){
	//alert('mobile');

 var clen = $('.idea_box_cont ul li').length;
 var cheght = $('.idea_box_cont ul li').height()+20;
 var finalmove = cheght
 var finallen = clen/1
 var final2 = Math.ceil(finallen);
 //alert(final2);
 var ccounter = 1;
  $('.see_more').click(function() {
        if (ccounter < final2-2) {
			$('.ideastore_h .see_more_h .see_less').css('opacity', '1')
            $('.idea_box_cont ul').animate({ top: '-='+finalmove});
             ccounter += 1;
           //$('.see_more').show();
        } else {
            $('.see_more').css('opacity', '0.3')
             $('.see_less').show();
        }
    });
        $('.see_less').click(function() {
        if (ccounter == 1) {
            $('.see_more').show();
             $('.see_less').css('opacity', '0.3')
        } else {
            $('.idea_box_cont ul').animate({top: '+='+finalmove});
			$('.see_more').css('opacity', '1')
            ccounter -= 1;
           //$('.see_less').show();
    }


   
});
	} else if($(window).width() > 480){
		
 var clen = $('.idea_box_cont ul li').length;
 var cheght = $('.idea_box_cont ul li').height()+20;
 var finalmove = cheght+2
 var finallen = clen/2
 var final2 = Math.ceil(finallen);
 //alert(final2);
 var ccounter = 1;
  $('.see_more').click(function() {
        if (ccounter < final2-2) {
			$('.ideastore_h .see_more_h .see_less').css('opacity', '1')
            $('.idea_box_cont ul').animate({ top: '-='+finalmove});
             ccounter += 1;
           //$('.see_more').show();
        } else {
            $('.see_more').css('opacity', '0.3')
             $('.see_less').show();
        }
    });
        $('.see_less').click(function() {
        if (ccounter == 1) {
            $('.see_more').show();
             $('.see_less').css('opacity', '0.3')
        } else {
            $('.idea_box_cont ul').animate({top: '+='+finalmove});
			$('.see_more').css('opacity', '1')
            ccounter -= 1;
           //$('.see_less').show();
        }


   
});	
		
		
		
		}
	
	});


/*****************scroller in mobile************************/

$(document).ready(function() {
   if($(window).width() <= 680){
var photolen  = $(' ul.thmplx li').length;

	var twidth = $('ul.thmplx li').width();
	var fwidth = twidth*(photolen+16);
	$(' ul.thmplx').css('width', fwidth);
	var counters = 1;
	$('.right_arr_mb').click(function(){
		if(counters < photolen-2)
		{
				$('ul.thmplx').animate({
					left : '-=106'
				});
				 counters += 1;
				
				$('.left_arr_mb').css('opacity', '1');
		}
		else{
			$('.right_arr_mb').css('opacity', '0.5');
			
		}
	});
	$('.left_arr_mb').click(function(){
		if(counters == 1)
		{
				$('.left_arr_mb').css('opacity', '0.5');
		}
		else{
			$('ul.thmplx').animate({
					left : '+=106'
				});
			counters -= 1;
			$('.right_arr_mb').css('opacity', '1');
		}
	});
   }

})

/*****************scroller in mobile************************/

/*****************ps area************************/
$(document).ready(function(){
	$("ul.pspop").hide();
	$(".ps_area a").click(function(){
		$(this).next("ul.pspop").slideToggle();
		})
		$("ul.pspop").mouseleave(function(){$("ul.pspop").slideUp('fast')})
		
			$("#commentsarea1").mCustomScrollbar({});
			$("#commentsarea2").mCustomScrollbar({});
			$("#commentsarea3").mCustomScrollbar({});
			$("#commentsarea4").mCustomScrollbar({});
			$("#commentsarea5").mCustomScrollbar({});
			
			$("a.expander").click(function(){
				$(this).parent().parent().hide();
				$(this).parent().parent().next().slideDown()
				})
			$("a.cexpander").click(function(){
				$(this).parent().parent().hide();
				$(this).parent().parent().prev().css('display' , 'block');
				
				})
	})


/*****************custom scroller************************/
















