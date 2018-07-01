


/* -------screenshot-images--------------------- */

$(document).ready(function(){



  $(".screenshot").slick({
  
    centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      delay: 500,
    slidesToShow: 3,
    prevArrow : '.slider-container .prev',
    nextArrow : '.slider-container .next',
      responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  
  });




  
  
 /* -------client-images--------------------- */
  
  
  

    $(document).ready(function() {
     
      $("#client-image").owlCarousel({
     
          autoPlay: true, //Set AutoPlay to 3 seconds
     
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
     
      });
     
    });
	
	
	
	
	
	
	
/* -------testimonial-images--------------------- */
  
  
    $(document).ready(function() {
     
      $("#testimonial-left-sec").owlCarousel({
     
          autoPlay: true, //Set AutoPlay to 3 seconds
     
          items : 1,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
     
      });
     
    });


  
  
  
  
});











