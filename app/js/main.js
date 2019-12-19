$(function(){

  $(".rate-star").rateYo({
    starWidth: "12px",
    rating: 5,
    readOnly: true
  });
  $(".products-slider__inner").slick({
    dots:true,
    arrows:false,
    slidesToShow: 4,
    slidesToScroll: 4
  });
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from:0,
    to: 600,
    prefix: "$"
});
  $(".icon-th-list").on("click", function(){
    $(".page-products__items > .product__item").addClass("list");
    $(".icon-th-large").removeClass("active");
    $("button.icon-th-list").addClass("active");
  });
  $(".icon-th-large").on("click", function(){
    $(".page-products__items > .product__item").removeClass("list");
    $(".icon-th-list").removeClass("active");
    $("button.icon-th-large").addClass("active");
  });
  $('.menu__btn').on('click', function(){
    $('.menu__btn-row').toggleClass('menu__btn-active');
  });
  $('.menu__btn').on('click', function(){
    $('.menu__list').slideToggle();
  });
  $('.header__btn-menu').on('click', function(){
    $('.header__box-btn').toggleClass('active');
  });

var mixer = mixitup('.products__inner-box');


});