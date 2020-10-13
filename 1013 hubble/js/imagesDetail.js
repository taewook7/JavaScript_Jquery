$(document).ready(function(){

    // 
    var locaNum=$(location).attr("href").split("=").reverse()[0];
    var nLocaNum=Number(locaNum);
    var detailItem=[];



    function getImages(count){
        $.ajax({
            url:'http://hubblesite.org/api/v3/image/'+count, 
            dataType:'jsonp',
            success:function(data){
              
                detailItem= `<h1 class="detailTit">${data.name}</h1>
                <div class="detailImg">
                
                    <img src="http:${data.image_files[4].file_url}" alt="">
                </div>
                <div class="btnBox detailBtn">
                    <a href="#" class="commonBtn prev"><i class="fa fa-angle-left"></i></a>
                    <a href="images.html" class="commonBtn">View All Images</a>
                    <a href="#" class="commonBtn next"><i class="fa fa-angle-right"></i></a>

                </div>
                <p class="detailDesc">
                    ${data.description}
                </p>`;
                $(".center.detailContents").append(detailItem);  
            }
        });
    }
$(document).ajaxComplete(function(){
    $(".detailBtn a").click(function(){
        if($(this).hasClass("prev")) {

            if(nLocaNum=== 1) {
                return false; // 아무것도 결과값을 내주지않는다.  클릭해봤자 무반응이다. 
            }else {
                location.replace('imagesDetail.html?num=' + (nLocaNum -1));
            }
        } else if($(this).hasClass("next")) {
            if(nLocaNum===48) {
                // 주소값을 바꿔주소 텍스트를 허블사이트로 바꿔준다.
                $(".next").attr("href", "http://www.hubblesite.org");
                // $(".next").text("Visit Hubble Site");                                
            } else {
                location.replace('imagesDetail.html?num='+ (nLocaNum+1));
            }
    }
    // console.log(typeof(nLocaNum));
});
    if(nLocaNum===48) {
        $(".next").text("Visit Hubble Site");
        $(".next").addClass("smallTxt");
    }

});
getImages(nLocaNum);
});