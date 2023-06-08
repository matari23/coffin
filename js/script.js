$(function(){
//메뉴영역
$(".sub").hide();
$(".gnb").mouseenter(function(){
$(".sub").stop().slideDown();
$(".header_b").stop().animate({height:"400px"},500)
})//mouseEnter
$(".gnb").mouseleave(function(){
    $(".sub").stop().slideUp();
    $(".header_b").stop().animate({height:"103px"},500)
})//mouseleave

//이미지슬라이드영역
$(".move").slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    arrows:true,
    
})

})//jq