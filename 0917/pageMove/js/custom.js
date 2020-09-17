// A $( document ).ready() block.
$( document ).ready(function() {

    $(".gnb li").click(function(){
        var liIndex =$(this).index();
        var liWidth=$(this).width();
        var liLeft = $(this).position().left;
        var headerHeight=$("header").outerHeight();
        var sectionTop = $(".section").eq(liIndex).offset().top;
        var scrollBtm = $(".wrap").outerHeight() -$(window).height();
        console.log(scrollBtm);

        $(this).siblings(".underline").width(liWidth);
        $(".gnb .underline").animate({left:liLeft},200);
        $("html, body").animate({scrollTop:sectionTop-headerHeight},300);
    });

        $(".gnb li").eq(0).trigger("click");
        // 첫번째께 클릭된 상태에서 시작

        // header fix when scroll down 
        $(window).scroll(function() {
            var scroll =$(window).scrollTop();
            console.log(scroll);
            if(scroll >0) {
                $("header").css({position:"fixed"});
            } else {
                $("header").css({position:"static"});
            }

            for(var i=0; i<$(".section").length; i++){
                var secTop = $(".section").eq(i).offset().top;
                var secBtm = secTop + $(".section").eq(i).outerHeight();  // 패딩까지 다읽어줄려면 outer 를 써야한다.
                var headerHeight=$("header").outerHeight();
                var liWidth=$(".gnb li").eq(i).width();
                var liLeft = $(".gnb li").eq(i).position().left;
                var scrollBtm = $(".wrap").outerHeight() -$(window).height();

                if(scroll >=secTop-headerHeight && scroll <secBtm-headerHeight) {
                    $(".gnb").find(".underline").width(liWidth);
                    $(".gnb").find(".underline").stop().animate({left:liLeft},200);
                    
                } else {

                } if(scroll >=scrollBtm) {
                    $(".gnb").find(".underline").width($(".last").outerWidth());
                    $(".gnb").find(".underline").stop().animate({left:$(".last").position().left},200);
                }
            }
        });

        //mobile icon ratete
        $(".mobile").click(function(){
            $(this).toggleClass("rotate");

            if($(this).hasClass("rotate")){
                $(".gnb").animate({right:0},300);
              

            } else {
                $(".gnb").animate({right:"-70%"},300); // 따옴표를 붙이는 이유는 숫자가 아니기 때문에 .. 퍼센트를 써야되서 어쩔수없이 붙임. 
               

            }
        });
    });
