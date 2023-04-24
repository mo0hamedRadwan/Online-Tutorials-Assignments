$(".parent").scroll(function(){
    var scroll = $(".parent").scrollTop();
    $(".zoom img").css({
        width: (100 + scroll/5) + "%"
    });
});