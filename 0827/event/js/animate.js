$(document).ready(function(){
    $("div").stop().on("mouseenter",function(){
        $("div").animate({width:'300px',height:'300px'},300,function(){
            $("div>p").stop().animate({
                "font-size":"30px"},300);
        });
    });
});

$(document).ready(function(){
    $("div").stop().on("mouseleave",function(){
        $("div").animate({width:'200px',height:'200px'},300)
    });
});