$(document).ready(function(){
    $(".btn").click(function(){
        var value = $(this).attr("data-filter");
        if(value == "all"){
            $(".filter").show("1000");
        }else{
            $(".filter").not("."+value).hide("1000");
            $(".filter").filter("."+value).show("1000");
        }
        $("li.active").removeClass("active");
        $(this).addClass("active");
    });
});