$(document).ready(function(){

    //$("selector").eventname(function() {
        // event handler...
    // $("selector").on("eventname",function() {
    //     event handler...
    // })

    $(".box1 ").on("click",function(){
        $("p").text("box1을 클릭했습니다.");
    });

    $(".box1 ").hover(function(){
        $("p").text("box1을 클릭했습니다.");
    });

    $(".box2 ").on("mouseenter",function(){
        $("p").text("box2에 마우스를 올렸습니다.");
    });

    $(".box2 ").on("mouseleave",function(){
        $("p").text("box2에 마우스를 내렸습니다.");
    });

    // $(".box3 ").on("mousemove",function(){
    //     $("p").text("box3 위에서 마우스가 움직입니다.");
    // });

     $(window).on("mousemove",function(e){
        //브라우저상 마우스 커서의 x축 좌표
        //pageY : 브라우저상 마우스 커서의 y축좌표
        
        var x=e.pageX;
        var y=e.pageY;

        $(".pagex").text(x);
        $(".pagey").text(y);


    });
    $(window).on("scroll",function(){
        var scroll = $(window).scrollTop();
        $("h2").text(scroll);
    });

});