$(document).ready(function () {

    let linkedInBlock = $(".linkedin__section");
    let twitterBlock = $(".twitter__section");
    let githubBlock = $(".github__section");

    linkedInBlock.on("click", () => {
        window.open("http://linkedin.com/in/jackjs", "_blank");
    });
    twitterBlock.on("click", () => {
        window.open("http://twitter.com/jackstewartwood", "_blank");
    });
    githubBlock.on("click", () => {
        window.open("http://github.com/gritteh", "_blank");
    });

    

});