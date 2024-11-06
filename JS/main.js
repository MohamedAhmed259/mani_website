$(document).ready(function(){
    $('.responsive-customs').slick({
            arrows: false,
            autoplay: true,
            autoplaySpeed: 300,
            infinite: true,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 1,
            cssEase: 'linear',
            rtl: true, // direction
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 9,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 7,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                    }
                }
            ]
    });
});