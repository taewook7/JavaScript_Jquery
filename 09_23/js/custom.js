//제이쿼리 사용해야하니까 레디 쓴다
$(document).ready(function() {

    var items = [];
    var allData = [];
    var addData=0;
    var addCount= 8;

    //json data load from the data folder
    $.getJSON("/09_22/data/content.json",initGallery);

    function initGallery(result) {
        allData = result;
        addItems();
        $(".btn button").on("click",function(){
            addItems();
        });
    } 

    function addItems(){
        var sliced=allData.slice(addData,addData + addCount);  // 0번째부터 8개 까지 
        $.each(sliced, function(i, field){ 
            // each로 분리해서 
        //   $("div").append(field + " ");

        items= `<div class="imgItem">
                <div>
                <img src="${field.images.thumb}" alt="">
                <span>
                <a href="detail.html?num=${i}">+</a>
                </span>
                </div>
                </div>`;
                $(".imgWrap").append(items);
                console.log(i);
        });
        addData +=sliced.length;
        if(addData < allData.length) {
        $(".btn button").text("Load More");
    } else {
        $(".btn button").text("Last image");
    }
    }
      // https://www.w3schools.com/jquery/jquery_ref_ajax.asp  여기서 getjson 클릭해서 가져왔음.버튼은 필요없어서 삭제
});


