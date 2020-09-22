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
                detailItem=`<p>${count}</p>
                <p>${result[count].title}</p>
                <p>${result[count].date}</p>
                <p>${result[count].images.large}</p>`;
                // $(".detail").append(detailItem);      
                       
              
            
            }
        });
    }
    getImage(nLocaNum);
});