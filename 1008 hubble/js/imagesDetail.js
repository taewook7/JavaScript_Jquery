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
                // console.log(data);
                detailItem= `<h1>${data.name}</h1>
                <p>${data.description}</p>
                <img src="http:${data.image_files[4].file_url}">`;
                $(".center.abc").append(detailItem);
            }
        });
    }

    // getImages(nLocaNum);

    // console.log(typeof(nLocaNum));
});