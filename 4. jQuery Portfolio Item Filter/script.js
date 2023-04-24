$(document).ready(function(){

    $(".All").click(function(){
        $(".items li").show();

        $("li.active").removeClass("active");
        $(this).addClass("active");
    });
    $(".Websites").click(function(){
        $(".items li").hide();
        $(".Website_Items").show();

        $("li.active").removeClass("active");
        $(this).addClass("active");
    });
    $(".Graphics").click(function(){
        $(".items li").hide();
        $(".Graphics_Items").show();

        $("li.active").removeClass("active");
        $(this).addClass("active");
    });
    $(".PSD").click(function(){
        $(".items li").hide();
        $(".PSD_Items").show();

        $("li.active").removeClass("active");
        $(this).addClass("active");
    });
    $(".Logo").click(function(){
        $(".items li").hide();
        $(".Logo_Items").show();

        $("li.active").removeClass("active");
        $(this).addClass("active");
    });
    $(".Application").click(function(){
        $(".items li").hide();
        $(".Application_Items").show();

        $("li.active").removeClass("active");
        $(this).addClass("active");
    });

});