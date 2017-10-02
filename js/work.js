$(document).ready(function() {


    
    const loopToGetDarks = numberOfBlocks => {
        let arrayOfDarks = [];
        let counter = 1;
        while (arrayOfDarks.length < numberOfBlocks) {
            arrayOfDarks.push($(".dark__" + counter));
            counter++;
        }
        return arrayOfDarks;
    };

    ////////// EDIT FOR NUMBER OF POSTS /////////
    let arrayOfDarks = loopToGetDarks(4);


    let firstLeft = $(".first__left");
    let firstRight = $(".first__right");
    let secondLeft = $(".second__left");
    let secondRight = $(".second__right");
    
    let arrayOfBlocks = [firstLeft, firstRight, secondLeft, secondRight];
    

    const removeGreyFromOthers = array => {
        array.map(val => {
            if (val.hasClass("clicked")) {
                val.parent().find(".options").remove();
                val.removeClass("clicked");
            }
        });
    };
    arrayOfDarks.map((val, i) => {
        val.on("click", function() {
            removeGreyFromOthers(arrayOfDarks);
            val.addClass("clicked");
            ////
            val.parent().append(generateHtmlOptions(i));

        });
    });

    // text over grey
    // Gives HTML links without specified links
    const generateHtmlOptions = index => {
        let rowContainer = $("<div/>").addClass("row options");
        let liveLink = $("<a/>")
            .append("<p/>")
            .text("View Live Version")
            .addClass("col-md-5 ml-auto mr-auto options_live")
            .addClass("live__link__" + index);
        liveLink
            .attr("href", giveLinkButtonsAttr(liveLink, "live", index))
            .attr("target", "blank");
            
        let githubLink = $("<a/>")
            .append("<p/>")
            .text("View Code on Github")
            .addClass("col-md-5 mr-auto ml-auto options_git")
            .addClass("git__link__" + index);
        githubLink
            .attr("href", giveLinkButtonsAttr(githubLink, "git", index))
            .attr("target", "blank");
            
        rowContainer.append(liveLink).append(githubLink);
        return rowContainer;
    };

    const giveLinkButtonsAttr = (element, liveOrGit, index) => {
        if (liveOrGit == "live") {
            switch (index) {
                case 0:
                return "http://jack.developme.training/";
                break;
                case 1: 
                return "http://htmlpreview.github.io/?https://github.com/Gritteh/Menu-Food-App/blob/master/food.html";
                break;
                case 2: 
                return "http://htmlpreview.github.io/?https://github.com/Gritteh/JS-Clock/blob/master/clock.html";
                break;
                case 3: 
                return "http://htmlpreview.github.io/?https://github.com/Gritteh/old_quote_generator/blob/master/index.html";
                break;
            }
        } else if (liveOrGit == "git") {
            switch (index) {
                case 0:
                return "https://github.com/Gritteh/table_tennis_tournament";
                break;
                case 1: 
                return "https://github.com/Gritteh/Menu-Food-App";
                break;
                case 2:
                return "https://github.com/Gritteh/JS-Clock";
                break;
                case 3:
                return "https://github.com/Gritteh/old_quote_generator";
                break;
            }
        }
        
    };

    
});