$(document).ready(() => {

    let topLeft = $(".top__left");
    let facePic = $(".face__pic");
    let wind0w = $(window);
    let screenWidth = $(window).width();

    let faceWidth = facePic.width();
    let contWidth = topLeft.width();

    facePic.css({
        marginLeft: contWidth/2 - faceWidth/2 + "px"
    });

    
    let fork = $(".right__fork");
    let coffee = $(".left__coffee");
    let mail = $(".right__mail");

    let forkCont = $(".top__right");
    let forkContWidth = forkCont.css("width");
    let forkWidth = fork.css("width");
    fork.css({
        marginLeft: +forkContWidth/2 - +forkWidth/2 + "px"
    });

    // let fork



    let iconArray = [fork, coffee, mail];


    const centerIcons = (array, messedUp) => {
       
        if (messedUp) {
            array.map((val, i) => {
                let iconWidth = val.width();
                let parentWidth = val.parent().width();
                val.css({
                    marginLeft: parentWidth/2 - iconWidth/2 + 10 + "px"
                });
            });   
        } else {
            array.map((val, i) => {
                let iconWidth = val.width();
                let parentWidth = val.parent().width();
                val.css({
                    marginLeft: parentWidth/2 - iconWidth/2 + "px"
                });
            });
        }   
    };

    centerIcons(iconArray, true);
    centerIcons([coffee, mail], false);

    wind0w.on("resize", () => {
        screenWidth = wind0w.width();
        contWidth = topLeft.width();
        
        facePic.css({
            marginLeft: contWidth/2 - faceWidth/2 + "px"
        });
        centerIcons(iconArray, false);
    
    });

   


});