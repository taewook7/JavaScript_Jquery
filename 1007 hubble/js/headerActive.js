$(document).ready(function(){

    var headerActive= function() {
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
    
            
            
        
            
        });
    }

    headerActive();

});


