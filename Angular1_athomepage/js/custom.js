$(function(){
	//Listing Toggle PLus Minus js
	 $('.categoryHeadingBox').click(function(e){
			e.preventDefault();
			$(this).next(".toggleInnerDataBox").slideToggle();
			$(this).children(".plusIcon").toggleClass('minusIcon');
			$(this).toggleClass("active");
		   
		});
	//Scroll To top	
		$(window).scroll(function(){
			if($(this).scrollTop()>100){
				$('.scroll_top_btn').fadeIn(500)
			}else{
				$('.scroll_top_btn').fadeOut(300);
				
				}
		});
		$(".scroll_top_btn").click(function () {
			$("body,html").animate({
				scrollTop: 0
			}, 500)
		});
//=============mobile menu animation===========	

//==========second method============
		$('.topMenuIcon').click(function(){
				$('.mobileMenuContainer').animate({'left':'0px'},500);
			});
			$('.close1').click(function(){
				$('.mobileMenuContainer').animate({'left':'-320px'},500);
			});
					
		

	
});


$(document).ready(function(e) {
	//==================Auto Slider for video===================
	
	var len = $('#vslide  > ul > li').length;
		var wd = $('#vslide  > ul > li').width()+18;
		var counter = 1;
		$('#_1').addClass('active');
		var tot_widh = len * wd 
		$('#vslide > ul').css('width',tot_widh);
		$('#vslide  > ul > li').eq(0).addClass('slideractive');
	$('.autoslider-nav a').click(function(){
		$('#vslide  > ul > li').removeClass('slideractive');
		var current = $(this).index();
		$('#vslide  > ul > li').eq(current).addClass('slideractive');
		$('.autoslider-nav a').removeClass('active');
		$(this).addClass('active');
		switch(current){
			case 0 :{
				$("#vslide > ul").animate({left:0});
				counter = 1;
				}
				 break;
			case 1 :{
				$("#vslide > ul").animate({left: -wd*1});
				counter = 2;
				}
				 break;
			case 2 :{
				$("#vslide > ul").animate({left: -wd*2});
				counter = 3;
				}
			   break;			
			 case 3 :{
				$("#vslide > ul").animate({left: -wd*3});
				counter = 4;
				}
			   break;			
			 case 4 :{
				$("#vslide > ul").animate({left:-wd*4});
				counter = 5;
				}
				break;			
			 case 5 :{
				$("#vslide > ul").animate({left:-wd*5});
				counter = 6;
				}
				break;			
			 case 6 :{
				$("#vslide > ul").animate({left:-wd*6});
				counter = 7;
				}
				break;			
			 case 7 :{
				$("#vslide > ul").animate({left:-wd*7});
				counter = 8;
				}
				break;			
			 case 8 :{
				$("#vslide > ul").animate({left:-wd*8});
				counter = 9;
				}
				break;			
			 case 9 :{
				$("#vslide > ul").animate({left:-wd*9});
				counter = 10;
				}
				break;			
			 case 10 :{
				$("#vslide > ul").animate({left:-wd*10});
				counter = 11;
				}
		}
		})
		var autoslides = setInterval(autoslide, 2000);
		function autoslide(){
			$('.autoslider-nav a').removeClass('active');
			if (counter == len)
			{	
				$('.next_arrow').hide();
				$("#vslide > ul").animate({
						left: '0px'
					});
					counter = 1;
					$('#vslide > ul > li').removeClass('active');
					$('#_' + counter).addClass('active');
			}else
			{
				$('.next_arrow').show();
				$("#vslide > ul").animate({
						left: '-='+wd
					}, 1000)
				counter += 1;
				$('#vslide > ul > li').removeClass('active');
				$('#_' + counter).addClass('active');
				$('.prev_arrow').show();
			}
	} 
			$('.next_arrow').click(function(){
			$('.autoslider-nav a').removeClass('active');
			if (counter <= len-1)
			{	
				$("#vslide > ul").animate({
						left: '-='+wd
					}, 1000)
					counter +=1;
					$('#vslide > ul > li').removeClass('active');
					$('#_' + counter).addClass('active');
					$('.prev_arrow').show();
					
			}else
			{
				$(this).hide();
				$('#vslide > ul > li').removeClass('active');
				$('#_' + counter).addClass('active');
			}
			})
			$('.prev_arrow').click(function(){
			$('.autoslider-nav a').removeClass('active');
			if (counter == 1)
			{	
				$(this).hide();
				$('#vslide > ul > li').removeClass('active');
				$('#_' + counter).addClass('active');
					
			}else
			
			{
					$('.next_arrow').show();
					$("#vslide > ul").animate({
						left: '+=' +wd
					}, 1000)
					counter -=1;
					$('#vslide > ul > li').removeClass('active');
					$('#_' + counter).addClass('active');
			}
			})

	$('#vslide > ul').mouseenter(function(){
		clearInterval(autoslides);
	});
	
	$('#vslide > ul').mouseleave(function(){
		autoslides = setInterval(autoslide, 5000);
	});
	
	
	//==============Auto Slide for photo=============
	
		var len1 = $('#vslider  > ul > li').length;
		var wd1 = $('#vslider  > ul > li').width();
		//alert(wd1);
		var counter = 1;
		$('#_1').addClass('active');
		var tot_widh1 = len1 * wd1 
		$('#vslider > ul').css('width',tot_widh1);
		$('#vslider  > ul > li').eq(0).addClass('slideractive1');
	$('.autoslider-nav1 a').click(function(){
		$('#vslider  > ul > li').removeClass('slideractive1');
		var current = $(this).index();
		$('#vslider  > ul > li').eq(current).addClass('slideractive1');
		$('.autoslider-nav1 a').removeClass('active');
		$(this).addClass('active');
		switch(current){
			case 0 :{
				$("#vslider > ul").animate({left:0});
				counter = 1;
				}
				 break;
			case 1 :{
				$("#vslider > ul").animate({left: -wd1*1});
				counter = 2;
				}
				 break;
			case 2 :{
				$("#vslider > ul").animate({left: -wd1*2});
				counter = 3;
				}
			   break;			
			 case 3 :{
				$("#vslider > ul").animate({left: -wd1*3});
				counter = 4;
				}
			   break;			
			 case 4 :{
				$("#vslider > ul").animate({left:-wd1*4});
				counter = 5;
				}
				break;			
			 case 5 :{
				$("#vslider > ul").animate({left:-wd1*5});
				counter = 6;
				}
				break;			
			 case 6 :{
				$("#vslider > ul").animate({left:-wd1*6});
				counter = 7;
				}
				break;			
			 case 7 :{
				$("#vslider > ul").animate({left:-wd1*7});
				counter = 8;
				}
				break;			
			 case 8 :{
				$("#vslider > ul").animate({left:-wd1*8});
				counter = 9;
				}
				break;			
			 case 9 :{
				$("#vslider > ul").animate({left:-wd1*9});
				counter = 10;
				}
				break;			
			 case 10 :{
				$("#vslider > ul").animate({left:-wd1*10});
				counter = 11;
				}
		}
		})
		
		var autoslides1 = setInterval(autoslide1, 2000);
		function autoslide1(){
			$('.autoslider-nav1 a').removeClass('active');
			if (counter == len1){	
				$("#vslider > ul").animate({
						left: '0px'
					});
					counter = 1;
					$('#vslider > ul > li').removeClass('active');
					$('#_' + counter).addClass('active');
			}else{				
				$("#vslider > ul").animate({
						left: '-='+wd1
					}, 1000)
				counter += 1;
				$('#vslider > ul > li').removeClass('active');
				$('#_' + counter).addClass('active');
				$('.prev_arrow').show();
			}
			if(counter == 5) {
				clearInterval(autoslides1);
				autoslides1 = setInterval(autoslide1, 10000);
			}else{
				clearInterval(autoslides1);
				autoslides1 = setInterval(autoslide1, 2000);
			}
	} 
			

	$('#vslider > ul').mouseenter(function(){
		clearInterval(autoslides1);
	});
	
	$('#vslider > ul').mouseleave(function(){
		autoslides1 = setInterval(autoslide1, 5000);
	});
});