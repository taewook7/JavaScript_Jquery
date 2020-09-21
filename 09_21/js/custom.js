//제이쿼리 사용해야하니까 레디 쓴다
$(document).ready(function() {

    //json data load from the data folder
    $.getJSON("/09_21/data/content.json", function(result){
        $.each(result, function(i, field){ 
            // each로 분리해서 
        //   $("div").append(field + " ");

        items=`<img src="${field.images.thumb}">`;
        // $("div").append(items);
        });
      });
      // https://www.w3schools.com/jquery/jquery_ref_ajax.asp  여기서 getjson 클릭해서 가져왔음.버튼은 필요없어서 삭제
});


