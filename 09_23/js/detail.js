$(document).ready(function(){
    var locaNum=$(location).attr('href').split("=").reverse()[0];
    var nLocaNum= Number(locaNum);
    var detailItem ='';
    console.log(typeof(nLocaNum));   // jquery 주소가져오기 
    // split 함수는 

    function getImage(count){
        $.ajax({ // ajax 함수는 화면을 로드하는 순간 끝난다. 계속실행할려면 함수에 넣어줘야한다.
            url:'/09_22/data/content.json',
            success:function(result){
                console.log(result);
                detailItem= `<h1>${result[count].title}</h1>

                <div class="imgBox">
                    <img src="${result[count].images.large}" alt="">
                    <div class="navi">
                        <button class="prev"><i class="fa fa-angle-left"></i></button>
                        <button class="next"><i class="fa fa-angle-right"></i></button>
                    </div>
                </div>
                <div class="txtBox">
                    <p><b>Category :</b> ${result[count].category}</p>
                    <p><b>Date :</b> ${result[count].date}</p>
                    <a href="index.html">HOME</a>

                </div>`;
                $(".detail").append(detailItem);
                       
              
            
            }
        });
    }
    getImage(nLocaNum);

    $(document).ajaxComplete(function(){
        $(".navi button").click(function(){
            if($(this).hasClass("prev")) { // 만약 클릭 이벤트가 실행되었다면  hasClass 를 쓴다.
                location.replace('detail.html?num='+(nLocaNum-1));
            } else {
                location.replace('detail.html?num='+(nLocaNum+1));
            }
        });

    });

});
