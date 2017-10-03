$(document).ready(function() {

    let wind0w = $(window);
    let screenWidth = wind0w.width();

    let nav = $(".nav");

    let menuIcon = $(".mob__icon");
    let mobLinks = $(".mob__links");
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

    const darkenIcon = isOpen => {
        isOpen ? menuIcon.css("color", "#00796b") : menuIcon.css("color", "");
    };

    const hideMobMenuDelay = elem => {
        setTimeout(() => {
            elem.css("visibility", "hidden");
        }, 250);
    };

    let menuShowing = false;
    menuIcon.on("click", () => {
        if (menuShowing) {
            header.animate({
                height: "12vh"
            }, 250);
            hideMobMenuDelay(mobLinks);
            menuShowing = false;
            darkenIcon(menuShowing);
        } else {
            header.animate({
                height: "33vh"
            }, 250);
            mobLinks.css("visibility", "visible");
            menuShowing = true;
            darkenIcon(menuShowing);
        }
        
    });

    // Menu hides when something other than mobile__nav is clicked
    $(document).click((event) => {
        if (!$(event.target).closest(".mobile__nav").length) {
            if (menuShowing) {
                header.animate({
                    height: "12vh"
                }, 250);
                hideMobMenuDelay(mobLinks);
                menuShowing = false;
                darkenIcon(menuShowing);
            }
        }
    });

});