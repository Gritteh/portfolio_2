$(document).ready(function() {

    let imageContainer = $(".image__container");
    let topTitle = $(".top__title");
    
    let wind0w = $(window);
    let screenWidth = wind0w.width();

    wind0w.on("resize", () => {
        screenWidth = wind0w.width();

        if (screenWidth < 540) {
            imageContainer.css("display", "none");
            topTitle.addClass("col-12").removeClass("col-8");
        } else {
            imageContainer.css("display", "");
            topTitle.addClass("col-8").removeClass("col-12");
            
        }
    });

    

});