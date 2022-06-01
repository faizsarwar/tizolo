$(".seeMore").click(function () {
    let currClosest = $(this).closest('.feature-inner').children('.contentPart');
    currClosest.toggleClass("overflowHide");

    if (currClosest.hasClass("overflowHide")) {
        $(this).html("See More");
    } else {
        $(this).html("See Less");
    }
});








$(".seeMore2").click(function () {
    let currClosest = $(this).closest('.featured-list-inner').children('.contentPart');
    currClosest.toggleClass("overflowHide");

    if (currClosest.hasClass("overflowHide")) {
        $(this).html("See More");
    } else {
        $(this).html("See Less");
    }
});







$(".seeMore3").click(function () {
    let currClosest = $(this).closest('.fadeInUp').children('.contentPart');
    currClosest.toggleClass("overflowHide");

    if (currClosest.hasClass("overflowHide")) {
        $(this).html("See More");
    } else {
        $(this).html("See Less");
    }
});