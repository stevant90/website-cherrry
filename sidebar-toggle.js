(function ($) {

    $("a.sidebar-left-toggle").click(function (e) {
        e.preventDefault();
        if (!$(".sidebar").hasClass("sidebar-left")) {
            $(".sidebar").addClass("sidebar-left")
        }
    });

    $("a.sidebar-right-toggle").click(function (e) {
        e.preventDefault();
        if ($(".sidebar").hasClass("sidebar-left")) {
            $(".sidebar").removeClass("sidebar-left");
        }
    });

    $("a.no-sidebar-toggle").click(function (e) {
        e.preventDefault();
        if (!$(".flex").hasClass("no-sidebar")) {
            $(".flex").addClass("no-sidebar");
        } else {
            $(".flex").removeClass("no-sidebar");
        }
    });

    $("a.hide-sidebar-toggle").click(function (e) {
        e.preventDefault();
        if (!$(".sidebar").hasClass("hide-sidebar")) {
            $(".sidebar").addClass("hide-sidebar");
        } else {
            $(".sidebar").removeClass("hide-sidebar");
        }
    });

})(jQuery);