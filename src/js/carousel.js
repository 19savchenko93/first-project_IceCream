import $ from 'jquery';
import 'slick-carousel';

$ (".carousel").slick({
    dots: true,
    arrows: false,
    speed: 2000,
    easing: 'linear',
    autoplay: 700,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
});