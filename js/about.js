$(document).ready(function() {

    let imageContainer = $(".image__container");
    let topTitle = $(".top__title");
    
    let wind0w = $(window);
    let screenWidth = wind0w.width();

    wind0w.on("resize", () => {
        screenWidth = wind0w.width();

        blockFullWidth();
        
    });
//                 padding: 4vh 3vw;

    const blockFullWidth = () => {
        if (screenWidth <= 580) {
            imageContainer.css("display", "none");
            topTitle.addClass("col-12").removeClass("col-8");
            topTitle.css({
                fontSize: "2.5em",
                padding: "8vh 3vw"
            });
        } else {
            imageContainer.css("display", "");
            topTitle.addClass("col-8").removeClass("col-12");
            topTitle.css({
                fontSize: "3em",
                padding: "4vh 3vw"
            });
        }
    }

    blockFullWidth();
    

    

});