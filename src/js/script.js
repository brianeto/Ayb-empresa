// CAROUSEL
$('.owl-carousel').owlCarousel({
    nav:true,
    loop:true,
    margin:10,
    navText : ["<i class='fas fa-chevron-circle-left'></i>","<i class='fas fa-chevron-circle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
       1000:{
            items:4
        }
    }
})

$('#myCarousel').carousel({
    interval: 4000
  })
  
  $('.carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<2;i++) {
      next=next.next();
      if (!next.length) {
          next = $(this).siblings(':first');
        }
      
      next.children(':first-child').clone().appendTo($(this));
    }
  });