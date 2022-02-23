$(function () {
  $('.catalog__btn').on('click', function () {
    $('.catalog__list').toggleClass('catalog__list--active');
    $('.catalog__btn').toggleClass('catalog__btn--active');
  });

  $('.main-slider__items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    fade: true,
    prevArrow: '<button class="btn-slider btn-slider--main-prev"><svg class="btn-slider__svg"><use xlink:href="images/icons/arrow-left.svg"></use></svg></button>',
    nextArrow: '<button class="btn-slider btn-slider--main-next"><svg class="btn-slider__svg"><use xlink:href="images/icons/arrow-right.svg"></use></svg></button>',
    responsive: [{
      breakpoint: 1540,
      settings: {
        arrows: false,
        dots: true
      }
    }, ]
  });
})