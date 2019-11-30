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
var mixer = mixitup('.products__inner-box');

});