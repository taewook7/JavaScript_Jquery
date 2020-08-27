$(document).ready(function(){
    setInterval(function(){

    
    var now=new Date();
    var year=now.getHours();

    var month=now.getMinutes();
    var sec=now.getSeconds();

    $("b").eq(0).text(year);
    $("b").eq(1).text(month);
    $("b").eq(2).text(sec);
    },1000);
});