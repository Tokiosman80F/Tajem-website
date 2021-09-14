
$(document).ready(function(){
    
  // slick slider
$('.banner-slider').slick({
    infinite: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    dots:true,
    fade:true,
    autoplay:true,
  });

  // team slider
  $('.team-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots:false,
  
  });


  // team two slider 
  $('.text-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-img'
  });
  $('.slider-img').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.text-slide',
    dots: false,
    centerMode: true,
    centerPadding: '0px',//center padding : use for padding in between imgs 
    focusOnSelect: true,
    prevArrow:'.team-arrow-left',
    nextArrow:'.team-arrow-right'
    
  });

  // venobox you vedio
  $('.venobox').venobox({
    framewidth : '853px',                          
    frameheight: '505px',                                                    
    titleattr  : 'data-title',                      
    //numeratio  : true,                              
    //infinigall : true,
    spinner:     'wave',                          
    share      : ['facebook', 'twitter', 'download'] // default: []
});


  });