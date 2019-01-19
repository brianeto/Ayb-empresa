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

