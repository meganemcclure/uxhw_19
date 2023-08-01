$(".condensedMenuButton").on("click", function() {
    if ($(".condensedNav").hasClass("open")) {
        $(".condensedNav").removeClass("open")
        $(".condensedNav").animate({height: "120px"})
        $(".condensedNavContents").slideUp()
    } else {
        $(".condensedNav").addClass("open")
        $(".condensedNav").animate({height: "100%"})
        $(".condensedNavContents").slideDown()
    }

    $(".condensedMenuIcon").toggleClass("fa-bars fa-x")
})