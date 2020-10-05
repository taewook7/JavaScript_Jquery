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
// 리사이즈를 통해서 화면을 줄여도 왼쪽 div 높이하고 계속 똑같이 유지 된다.

    fitHeight();




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

    $(".aboutTab .tab").eq(0).find(".commonBtn").trigger("click"); 
    // 시작하자마자 eq 0번째를 클릭 
   }

    aboutTabs();


   //header fix on browser 
   var headerFix= function() {
        $(window).scroll(function() {
            var scroll=$(window).scrollTop();
            //console.log(scroll);


            for(var i=0; i<$("section").length; i++) {
                var sectionTop=$("section").eq(i).offset().top;
                var sectionBottom=sectionTop+$("section").eq(i).outerHeight();

                // console.log(sectionTop);
                // console.log(sectionBottom);

                
                if(scroll >= sectionTop && scroll<sectionBottom) {
                    $(".gnb li").eq(i).addClass("active");
                } else {
                    $(".gnb li").eq(i).removeClass("active");
                }

                //전체 높이에서 해당화면의 높이를 빼면 맨밑 화면의 상단위치를 알수 있다.
                var winHeight=$(window).height();  // 이게 화면의 높이다. 
                var scrollBtm=$(".wrap").outerHeight() - winHeight;  
            
                // 화면에 안닿아서  -5 정도 해주었다.
                if(scroll>=scrollBtm-5) {

                    $(".gnb li").eq(1).removeClass("active");
                    $(".gnb li").eq(2).addClass("active");
                }
    
            }

            
            if(scroll > 0) {
                // $("header").css({position:'fixed',height:'100px' });
                $("header").addClass('on');
            }else {
                // $("header").css({position:'static'});
                $("header").removeClass('on');
            }
   });
}
   headerFix();

   var moveSection=function() {
        $(".gnb li").click(function(){
            var index=$(this).index();
            var sectionTop =$("section").eq(index).offset().top;
            // alert(index);
            $("html,body").animate({scrollTop:sectionTop});
        });
   }

   moveSection();
//    console.log($("section").eq(1).offset().top);

   var rotateIcon=function() {
    $(".mobileGnb").click(function(){
        $(this).toggleClass("rotate");
        if($(this).hasClass("rotate")) {
            $(".gnb").animate({right:0},300);
            $(".mobileGnb span").addClass("whiteColor");
        }else{
            $(".gnb").animate({right:'-70%'},300);
            $(".mobileGnb span").removeClass("whiteColor");
        }
    });
   }
   rotateIcon();
});