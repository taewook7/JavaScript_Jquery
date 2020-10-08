$(document).ready(function(){
    var images=[];
    var getCount=9;

    
    function getImages(count){
    $.ajax({
        url:'http://hubblesite.org/api/v3/image/'+count, 
        dataType:'jsonp',
        success:function(data){
            //console.log(count);
            images=`<div class="imgItem allImgItem">
                        <div>
                            <a href="imagesDetail.html?num=${count}">
                          <img src="http:${data.image_files[3].file_url}" alt="">
                          </a>
                        </div>
                   </div>`;
                   $(".imgBox").append(images);
        }
    });
}

for(var i=1; i<getCount; i++) {
    getImages(i);
    $(".loadMore").click(function(){
        getImages(getCount);
        getCount++;
        
        if(getCount >=51) {
            // 태그를 바꿔버리는것이다.
            $(".btnBox").html('<a href="http://www.hubblesite.org" class="commonBtn loadMore">Go Hubble Site</a>');
        }
    });
}
});