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
        centerIcons(iconArray);
    
    });

    let iconArray = [$(".right__fork"), $(".left__coffee"), $(".right__mail")];


    const centerIcons = array => {
        array.map((val, i) => {
            let iconWidth = val.width();
            let parentWidth = val.parent().width();
            val.css({
                marginLeft: parentWidth/2 - iconWidth/2 + "px"
            });
        });
    };

    centerIcons(iconArray);

    
});