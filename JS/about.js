$(document).ready(function(){
    $('.responsive-customs').slick({
            arrows: true,
            dots:true,
            // autoplay: true,
            // autoplaySpeed: 300,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            cssEase: 'linear',
            rtl: true, // direction
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
    });
});