// A $( document ).ready() block.
$( document ).ready(function() {

    // 초기화 변수
    var count=0;
    var indicator='';
    var timer;
    var slideLength =$(".slide").length;
    
    //-------------------
    // DOM 변수 document object model  
    var $indicator =$(".indicator");
    var $navigation = $(".navigation");
    var $slideWrap= $(".sliderSection");
    //-------------------
    
    //메인 슬라이드 함수
    function moveSlide(n) {
        $(".slides").animate({left:-100 * n + "%"},300);
        count=n;
        $indicator.find("a").removeClass("active");  // 전체를 다 지워준다. 
        $indicator.find("a").eq(count).addClass("active");  // 현재페이지에 해당하는것만 addclass 액티브 해준다.
    }
    //---------------------------------
    
    
    // 인디케이터 기능 실행
    for(var i=1; i<= slideLength; i++) {
        indicator =`<a href="#">${i}</a> `;
        $indicator.append(indicator);
        }    
    
        $indicator.find("a").click(function() {
            // 후손 중에서 a를 찾는다.
            var index=$(this).index();
            moveSlide(index);
            
        });
    //----------------------------
    
    
        // $(".next").click(function() {
        //     moveSlide(count + 1);
    
        // }) 
    
        // $(".prev").click(function() {
        //     moveSlide(count -1);
        // })
    
    
        // 네비게이션 기능 실행
    
        $navigation.find("a").click(function() {
           
            if($(this).hasClass("prev")){
                    if(count==0) {
                        return false;
                    } else {
                        moveSlide(count -1);
                    }
                } else {
                    if(count >= slideLength -1) {
                        return false;
                    } else {
                        
                        moveSlide(count+1);
                    }
            }
        });
    
        //-----------------------------
    
    
        // 자동 타이머 기능
    
        function startTimer(){
             timer = setInterval(function(){  // 이걸멈추는것은 클리어 인터벌이다.  
                // timer를 밖에서 쓰려면 맨위에 var 변수 선언해줘야한다.
                var interval = (count + 1) % slideLength;
                moveSlide(interval);
            },2000);
    
        }
    
        function stopTimer(){
            clearInterval(timer);
        }
    
        $slideWrap.on("mouseenter",function() {
            stopTimer();
        });  // 마우스를 대면 멈추고 
    
        $slideWrap.on("mouseleave",function() {
            startTimer();
        });   // 마우스가 섹션을 떠나면 다시 움직임. 
        //-------------------------------
    
    
        startTimer();  // 자동 시작 
    
        //화면 시작 시 첫 번째 사진
        $indicator.find("a").eq(0).trigger("click"); // 처음화면에서 첫번째 1번이 클릭되게 자동설정
    
    
        // 위에 주석처리 한것을 한번에 합친 영상
    });