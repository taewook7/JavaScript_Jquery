//제이쿼리 사용해야하니까 레디 쓴다
$(document).ready(function() {

    var items =[];
    
    $.ajax({
        url:'/09_23/data/content.json',
        // url 로 접근해서 끌고왔으면 성공
        success:function(data){
            // console.log(data.length);
            // console.log(data[0]);
        for(var i=0; i<data.length; i++) {

             items= `<div class="imgItem">
                <div>
                <img src="${data[i].images.thumb}" alt="">
                <span>
                <a href="detail.html?num=${i}">+</a>
                </span>
                </div>
                </div>`;
             $(".imgWrap").append(items);

        }
    }  
    }); //end of ajax function

    
    // 먼저읽은다음에 카운트한다. 
    // ajaxComplete 안에 들어있지 않으면 0 이라고 뜬다. 
    $(document).ajaxComplete(function(){
        var itemCount=$(".imgItem:hidden").length;

        // console.log(itemCount);
        
        
        
        // 감춰진것중에서 0번째부터 시작해서 8개를 보여준다
        $(".imgItem:hidden").slice(0,8).show(); 
        
        
        // btn 의 자식 버튼을 클릭하게 되면  8개가 더 나오게 된다.
        // 가려진것만 0부터 8까지 계속 보여준다.
        // 블록이 0부터 8까지 9개가 있는데 8개를 보여주면 그다음부터 다시 0 으로 된다.
        $(".btn button").click(function(){
            
            
            if($(this).hasClass("more")) {
                $(".imgItem:hidden").slice(0,8).show(); 
            
            // more 라는 클래스가 있을때 해당된다
            if($(".imgItem:hidden").length===0){
                $(this).text("Fold");
                // attr 은 div 태그가 있으면 뒤에 클래스 뭐가 있으면 div class="abc"   abc는 div 의 성격을 규정해주는데
                // 성격을 영어로 어트리뷰트 라고한다.  <a href="#"> a 태그의 성격을 규정해준다 href 도 속성(어트리뷰트) 
                // 태그마다 고유한 성격이 어트리뷰트 이다.
                // 변수로 abc 에다가 abc=$("a").attr("href");
                   // attr("href","abc")  두개일때는 href 를 abc 로 바꿔준다.
                
                $(this).attr("class","fold"); 
            }
            
            } else if($(this).hasClass("fold")){
                var imgItems = $(".imgItem").length;
                $(".imgItem").slice(8,imgItems).hide(); 
                $(this).text("Load More");
                $(this).attr("class","more");
            }

            // 전체높이에서 화면높이를 뺀다.
            var winBottom= $(document).height() -$(window).height();
            $("html,body").animate({"scrollTop":winBottom},400);
        });

    });










    // var items = [];
    // var allData = [];
    // var addData=0;
    // var addCount= 8;

    // //json data load from the data folder
    // $.getJSON("/09_22/data/content.json",initGallery);

    // function initGallery(result) {
    //     allData = result;
    //     addItems();
    //     $(".btn button").on("click",function(){
    //         addItems();
    //     });
    // } 

    // function addItems(){
    //     var sliced=allData.slice(addData,addData + addCount);  // 0번째부터 8개 까지 
    //     $.each(sliced, function(i, field){ 
    //         // each로 분리해서 
    //     //   $("div").append(field + " ");

    //     items= `<div class="imgItem">
    //             <div>
    //             <img src="${field.images.thumb}" alt="">
    //             <span>
    //             <a href="detail.html?num=${i}">+</a>
    //             </span>
    //             </div>
    //             </div>`;
    //             $(".imgWrap").append(items);
    //             console.log(i);
    //     });
    //     addData +=sliced.length;
    //     if(addData < allData.length) {
    //     $(".btn button").text("Load More");
    // } else {
    //     $(".btn button").text("Last image");
    // }
    // }
    //   // https://www.w3schools.com/jquery/jquery_ref_ajax.asp  여기서 getjson 클릭해서 가져왔음.버튼은 필요없어서 삭제
});


