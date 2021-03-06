$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    // ----------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var paddingTop;

    // ----------------------------

    var shape;

    // ----------------------------

    getFooterPosition();

    getPromoTopPadding();

    getAdaptivePositionElements();

    $(window).resize(function() {

        if( $(".footer").length > 0 ) {

            $(".wrapper").css({"min-height" : $(window).height() + "px"});

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        }

        // ----------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // ----------------------

        getPromoTopPadding();

        getTitleShapeParams();

        getAdaptivePositionElements();

    });


    $(function() {

        $(".h-block").each(function() {

            $(this).append("<div class='shape-block shape-right'></div>");
            $(this).prepend("<div class='shape-block shape-left'></div>");

        });

        getTitleShapeParams();

    });


    $(function() {

        $(".video-mask").on("click", function(playBtnEvent) {

            playBtnEvent.preventDefault();

            parentEl = $(this).closest(".video-block");

            indexVideoBox = parentEl.index(".video-block");

            videoIdAttr = "video_" + indexVideoBox;
            
            parentEl.find("iframe").attr("id", videoIdAttr);

            $(this).fadeOut(300);

            $("#" + videoIdAttr)[0].src += "?rel=0&autoplay=1";            

        });

    });


    function getFooterPosition() {

        if( $(".footer").length > 0 ) {

            $(".wrapper").css({"min-height" : $(window).height() + "px"});

            $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

            setFooterPositionInterval = setInterval(function() {

                contentCoor = $(".content").offset().top + $(".content").height();
                footerCoor = $(".footer").offset().top;

                if( contentCoor != footerCoor ) {

                    $(".wrapper").css({"min-height" : $(window).height() + "px"});

                    $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                    clearInterval(setFooterPositionInterval);

                }

            }, 35);

        }

    }

    function getPromoTopPadding() {

        paddingTop = $(".header-site").height();

        $(".promo-section").css({
            "padding-top" : paddingTop + "px"
        });

    }

    function getTitleShapeParams() {

        $(".h-block").each(function() {
            shape = $(this).find(".shape-block");
            shape.css({
                "width" : ( $(this).width() - $(this).find(".h-inner").outerWidth(true) ) / 2 + "px"
            });
        });

    }

    function getAdaptivePositionElements() {

        $(".append-elem").each(function() {

            if( $(this).hasClass("desktop-position") ) {

                screenParam = parseInt( $(this).attr("data-min-screen") );

                indexElem = $(this).attr("data-append-descktop-elem");

                if( bodyWidth <= screenParam ) {

                    $("[data-append-elem = '"+ indexElem +"']").append($(this).children());

                }

                 if( bodyWidth > screenParam ) {

                    $("[data-append-descktop-elem = '"+ indexElem +"']").append($("[data-append-elem = '"+ indexElem +"']").children());

                }

            }

        });

    }



});
