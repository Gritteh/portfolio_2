$(document).ready(() => {

    let workBlock = $(".top__right");
    let aboutBlock = $(".bottom__left");
    let contactBlock = $(".bottom__right");

    workBlock.on("click", () => {
        window.location = "http://jacks.work/work.html";
    });
    aboutBlock.on("click", () => {
        window.location = "http://jacks.work/about.html";
    });
    contactBlock.on("click", () => {
        window.location = "http://jacks.work/contact.html";
    });


    
});