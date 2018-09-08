$(function () {
    console.log("works");
    // todos los elementos que tengan el atributo data-toggle
    $('[data-toggle="tooltip"').tooltip();

    $("#header a.nav-link").on("click", function (e) {
        //e.preventDefault(); //evitar el eventos del enlace normal
        var strAncla = $(this).attr('href'); //id del ancla
        console.log("click" + strAncla);
        /*$('body,html').stop(true, true).animate({
            scrollTop: $(strAncla).offset().top
        }, 1000);*/

        $("html, body").animate({
            scrollTop: $("" + strAncla).offset().top
        });
    });

    // Popover
    $('[data-toggle="popover"]').popover();

    let num = 0;
    $("#jd-button").on("click", function(){
        if((num % 2) == 0){
            $(this).addClass("jd-active")
        }else{
            $(this).removeClass("jd-active")
        }
        num++
    });
});


// Popover
$(function () {});