"use strict";

var closeNavigate = function () {
    $("body").removeClass("ks-opened-sidebar"), $("body").removeClass("ks-body-fixed")
}, openNavigate = function () {
    $(window).width() < 760 && $("body").addClass("ks-body-fixed"), $("body").addClass("ks-opened-sidebar")
}, addWaveEffect = function (e, a) {
    var s = ".ks-wave-effect", n = e.outerWidth(), t = a.offsetX, i = a.offsetY;
    e.prepend('<span class="ks-wave-effect"></span>'), $(s).css({top: i, left: t}).animate({opacity: "0", width: 2 * n, height: 2 * n}, 500, function () {
        e.find(s).remove()
    })
};

$(document).ready(function () {
    $(".ks-header-submenu").show(), $(".ks-overlay, .ks-sidebar-toggle-button").on("click", function () {
        closeNavigate()
    }), $(".ks-toggle-sidebar").on("click", function () {
        $("body").hasClass("ks-opened-sidebar") ? closeNavigate() : openNavigate()
    }), $(".ks-sidebar-pin-button").on("click", function () {
        $("body").toggleClass("ks-pinned-sidebar")
    }), $(".ks-search-toggle").on("click", function (e) {
        e.preventDefault(), $(".ks-search-bar").toggleClass("active")
    }), $(".ks-header-submenu").parent().find("a:first").on("click", function (e) {
        e.stopPropagation(), e.preventDefault(), $(this).parents(".ks-header-navigation").find(".ks-header-submenu").not($(this).parents("li").find(".ks-header-submenu")).removeClass("active"), $(this).parents("li").find(".ks-header-submenu").show().toggleClass("active")
    }), $(".ks-sidebar-navi li.show > ul").slideDown(200), $(".ks-sidebar-navi a").on("click", function (e) {
        var a = $(this);
        $(this).next().is("ul") ? (e.preventDefault(), a.parent().hasClass("show") ? (a.parent().removeClass("show"), a.next().slideUp(200)) : (a.parent().parent().find(".show ul").slideUp(200), a.parent().parent().find("li").removeClass("show"), a.parent().toggleClass("show"), a.next().slideToggle(200))) : (a.parent().parent().find(".show ul").slideUp(200), a.parent().parent().find("li").removeClass("show"), a.parent().addClass("show"))
    }), $(".ks-material-button").on("click", function (e) {
        addWaveEffect($(this), e)
    }), $(document).on("click", function (e) {
        var a = $(e.target);
        !0 === $(".ks-header-submenu").hasClass("active") && !a.hasClass("ks-submenu-toggle") && a.parents(".ks-header-submenu").length < 1 && $(".ks-header-submenu").removeClass("active"), a.parents(".ks-search-bar").length < 1 && !a.hasClass("ks-search-bar") && !a.parent().hasClass("ks-search-toggle") && !a.hasClass("ks-search-toggle") && $(".ks-search-bar").removeClass("active")
    })
});
