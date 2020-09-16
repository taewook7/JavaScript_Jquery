// A $( document ).ready() block.
$( document ).ready(function() {

    $(".gnb li").click(function(){
        var liIndex =$(this).index();
        var liWidth=$(this).width();
        var liLeft = $(this).position().left;
        var headerHeight=$("header").outerHeight();
        var sectionTop = $(".section").eq(liIndex).offset().top;
        var scrollBtm = $(".wrap").outerheight() -$(window).height();
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
                var liWidth=$(".gnb li").eq(i).width();
                var liLeft = $(".gnb li").eq(i).position().left;

                if(scroll >=secTop && scroll <secBtm) {
                    $(".gnb").find(".underline").width(liWidth);
                    $(".gnb").find(".underline").stop().animate({left:liLeft},200);
                    
                } else {

                } if(scroll >=scrollBtm) {
                    $(".gnb").find(".underline").width($(".last").outerWidth());
                    $(".gnb").find(".underline").stop().animate({left:$(".last").position().left},200);
                }
            }
        });
    });
