$(document).ready(function() {

    let wind0w = $(window);
    let screenWidth = wind0w.width();

    let nav = $(".nav");

    let menuIcon = $(".mob__icon");
    let header = $(".header");

    if (screenWidth < 650) {
        nav.css("display", "none");
    } else {
        nav.css("display", "");
    }

    wind0w.on("resize", () => {
        screenWidth = wind0w.width();
        if (screenWidth < 650) {
            nav.css("display", "none");
        } else {
            nav.css("display", "");
        }
    });

    let menuShowing = false;
    menuIcon.on("click", () => {
        if (menuShowing) {
            header.animate({
                height: "12vh"
            }, 250);
            menuShowing = false;
        } else {
            header.animate({
                height: "33vh"
            }, 250);
            menuShowing = true;
        }
        
    });

});