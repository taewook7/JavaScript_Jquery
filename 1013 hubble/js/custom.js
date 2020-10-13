// A $( document ).ready() block.
$( document ).ready(function() {
    

    // about panel height fit to tab height 
    //어바웃 패널의 높이를 탶 높이하고 맞춘다. 

    var fitHeight=function(){
        var tabHeight = $(".about .tab>div").outerHeight();
        $(".imgPanel").outerHeight(tabHeight);
        $(window).resize(function() {
            var tabHeight = $(".about .tab>div").outerHeight();
            $(".imgPanel").outerHeight(tabHeight);
        });
    }
    fitHeight();

// 리사이즈를 통해서 화면을 줄여도 왼쪽 div 높이하고 계속 똑같이 유지 된다.

    // $(window).resize(fuction() {
    //     var winWidth=$(this).width();
    //     if(winWidth > 1280) {
    //         fitHeight();
    //     } else {
    //         $(".imgPanel").css({height:'350px'});
    //     }
    // });
    




    // //example
    // $("button").click(function(){
    //     var index=$(this).index();
    //     // alert(index);
    //     // $(".panel").eq(0).hide();
    //     $(".panel").hide(); 
    //     $(".panel").eq(index).show();
    //     // 디스플레이가 none 일때 쇼로 설정하면 버튼을 클릭할떄 나오고 디스플레이가 블록일때 하이드를 누르면 숨겨진다.
        
   // about section tabs
   var aboutTabs =function() {
    $(".aboutTab .tab .commonBtn").click(function(){
    var tabIndex =   $(this).parent().parent().parent().index();
    // alert(tabIndex);
    $(".panelBox").hide();
        $(".panelBox").eq(tabIndex).show();
    });

    $(".mobileTab button").click(function() {
        var mTabIndex = $(this).index();
        $(".panelBox").hide();
        $(".panelBox").eq(mTabIndex).show();
    });

    $(".aboutTab .tab").eq(0).find(".commonBtn").trigger("click"); 
    // 시작하자마자 eq 0번째를 클릭 
   }

    aboutTabs();

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,

        items:1,
    });
   
    
    var slideHeight = $(window).width() * 0.3;
    $(".owl-carousel .owl-stage").height(slideHeight);
    $(window).resize(function(){
        var slideHeight = $(window).width() * 0.3;
    $(".owl-carousel .owl-stage").height(slideHeight);
    });
});