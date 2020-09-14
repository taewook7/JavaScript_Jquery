// A $( document ).ready() block.
$( document ).ready(function() {

var count=0;

    function moveSlide(n) {
        $(".slides").animate({left:-100 * n + "%"},300);
        count=n;
    }

    // $(".next").click(function() {
    //     moveSlide(count + 1);

    // }) 

    // $(".prev").click(function() {
    //     moveSlide(count -1);
    // })


    $(".navigation a").click(function() {
        if($(this).hasClass("prev")){
            moveSlide(count -1);
        } else {
            moveSlide(count+1);
        }
    });
    // 위에 주석처리 한것을 한번에 합친 영상
});