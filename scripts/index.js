$(function(){
  $('.wrapper .triggers').children().eq(0).on('click',function(){
    $inspectedDom = $('.widges-wrapper');
    if($inspectedDom.hasClass('height300')){
      $inspectedDom.removeClass('height300');
      return;
    }
    if($('.links-wrapper').hasClass('height100')){
      $('.links-wrapper').removeClass('height100')
    }
    if($('.search-wrapper').hasClass('height100')){
      $('.search-wrapper').removeClass('height100')
    }
    $inspectedDom.addClass('height300');
  })
  $('.wrapper .triggers').children().eq(1).on('click',function(){
    $inspectedDom = $('.links-wrapper');
    if($inspectedDom.hasClass('height100')){
      $inspectedDom.removeClass('height100');
      return;
    }
    if($('.widges-wrapper').hasClass('height300')){
      $('.widges-wrapper').removeClass('height300')
    }
    if($('.search-wrapper').hasClass('height100')){
      $('.search-wrapper').removeClass('height100')
    }
    $inspectedDom.addClass('height100');
  })
  $('.wrapper .triggers').children().eq(2).on('click',function(){
    $inspectedDom = $('.search-wrapper');
    if($inspectedDom.hasClass('height100')){
      $inspectedDom.removeClass('height100');
      return;
    }
    if($('.widges-wrapper').hasClass('height300')){
      $('.widges-wrapper').removeClass('height300')
    }
    if($('.links-wrapper').hasClass('height100')){
      $('.links-wrapper').removeClass('height100')
    }
    $inspectedDom.addClass('height100');
  })
})
