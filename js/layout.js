"use strict";

var closeNavigate = function () {
    $("body").removeClass("app-opened-sidebar"), $("body").removeClass("app-body-fixed")
}, openNavigate = function () {
    $(window).width() < 760 && $("body").addClass("app-body-fixed"), $("body").addClass("app-opened-sidebar")
}, addWaveEffect = function (e, a) {
    var s = ".app-wave-effect", n = e.outerWidth(), t = a.offsetX, i = a.offsetY;
    e.prepend('<span class="app-wave-effect"></span>'), $(s).css({top: i, left: t}).animate({opacity: "0", width: 2 * n, height: 2 * n}, 500, function () {
        e.find(s).remove()
    })
};

$(document).ready(function () {
    $(".app-header-submenu").show(), $(".app-overlay, .app-sidebar-toggle-button").on("click", function () {
        closeNavigate()
    }), $(".app-toggle-sidebar").on("click", function () {
        $("body").hasClass("app-opened-sidebar") ? closeNavigate() : openNavigate()
    }), $(".app-sidebar-pin-button").on("click", function () {
        $("body").toggleClass("app-pinned-sidebar")
    }), $(".app-search-toggle").on("click", function (e) {
        e.preventDefault(), $(".app-search-bar").toggleClass("active")
    }), $(".app-header-submenu").parent().find("a:first").on("click", function (e) {
        e.stopPropagation(), e.preventDefault(), $(this).parents(".app-header-navigation").find(".app-header-submenu").not($(this).parents("li").find(".app-header-submenu")).removeClass("active"), $(this).parents("li").find(".app-header-submenu").show().toggleClass("active")
    }), $(".app-sidebar-navi li.show > ul").slideDown(200), $(".app-sidebar-navi a").on("click", function (e) {
        var a = $(this);
        $(this).next().is("ul") ? (e.preventDefault(), a.parent().hasClass("show") ? (a.parent().removeClass("show"), a.next().slideUp(200)) : (a.parent().parent().find(".show ul").slideUp(200), a.parent().parent().find("li").removeClass("show"), a.parent().toggleClass("show"), a.next().slideToggle(200))) : (a.parent().parent().find(".show ul").slideUp(200), a.parent().parent().find("li").removeClass("show"), a.parent().addClass("show"))
    }), $(".app-material-button").on("click", function (e) {
        addWaveEffect($(this), e)
    }), $(document).on("click", function (e) {
        var a = $(e.target);
        !0 === $(".app-header-submenu").hasClass("active") && !a.hasClass("app-submenu-toggle") && a.parents(".app-header-submenu").length < 1 && $(".app-header-submenu").removeClass("active"), a.parents(".app-search-bar").length < 1 && !a.hasClass("app-search-bar") && !a.parent().hasClass("app-search-toggle") && !a.hasClass("app-search-toggle") && $(".app-search-bar").removeClass("active")
    })
});
