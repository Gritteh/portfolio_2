$(document).ready(() => {

    let topLeft = $(".top__left");
    let facePic = $(".face__pic");
    let wind0w = $(window);
    let screenWidth = wind0w.width();

    let faceWidth = facePic.width();
    let contWidth = topLeft.width();

    facePic.css({
        marginLeft: contWidth/2 - faceWidth/2 + "px"
    })

    wind0w.on("resize", () => {
        screenWidth = wind0w.width();
        contWidth = topLeft.width();
        
        facePic.css({
            marginLeft: contWidth/2 - faceWidth/2 + "px"
        });

    });


    
});