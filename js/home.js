$(document).ready(function(){
    $('.banner-img').owlCarousel({
        loop:true,
        margin:0,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.famous-place_wrap').owlCarousel({
        loop:true,
        margin:30,
        dots:true,
        // autoplay:true,
        // autoplayTimeout:3000,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })

    // $('#back-to-top').on('click', function(){
	// 	$('html').animate({
	// 		scrollTop :0
	// 	},600)
	// })
})

var backtop = document.getElementById("back-to-top");
    window.addEventListener("scroll",function(){
        if (document.documentElement.scrollTop >= 300){
            backtop.style.display = "flex";
        }else{
            backtop.style.display= "none";
        }
    })
    backtop.addEventListener("click",function(){
        document.documentElement.scrollTop =0;
    })