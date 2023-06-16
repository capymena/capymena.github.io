/* ===================================================================
 * Capymena - Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {
    "use strict";
    
    var cfg = {
        scrollDuration: 800, // smoothscroll duration
        mailChimpURL: '../php/mail.php' // mailchimp url
    };

    var $WIN = $(window);

    // Add the User Agent to the <html>
    // will be used for IE10 detection (Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0))
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    /* Preloader
     * -------------------------------------------------- */
    var ssPreloader = function() {
        $("html").addClass('ss-preload');

        $WIN.on('load', function() {
            // will first fade out the loading animation 
            $("#loader").fadeOut("slow", function() {
                // will fade out the whole DIV that covers the website.
                $("#preloader").delay(300).fadeOut("slow");
            });

            // for hero content animations 
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
        });
    };

    /* info toggle
     * ------------------------------------------------------ */
    var ssInfoToggle = function() {
        //open/close lateral navigation
        $('.info-toggle').on('click', function(event) {
            event.preventDefault();
            $('body').toggleClass('info-is-visible');
        });
    };

    /* slick slider
     * ------------------------------------------------------ */
    var ssSlickSlider = function() {
        $('.home-slider').slick({
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            speed: 3000
        });
    };

    /* placeholder plugin settings
     * ------------------------------------------------------ */
    var ssPlaceholder = function() {
        $('input, textarea, select').placeholder();
    };

    /* final countdown
     * ------------------------------------------------------ */
    var ssFinalCountdown = function() {
        var currentDate = new Date();
        var currentMonth = currentDate.getMonth();
        var currentYear = currentDate.getFullYear();
        var targetDate;

        // Obtener la fecha objetivo del próximo día 14
        if (currentDate.getDate() > 14) {
            // Si ya pasó el día 14 de este mes, establecer el objetivo para el próximo mes
            targetDate = new Date(currentYear, currentMonth + 1, 14);
        } else {
            // Si aún no ha pasado el día 14 de este mes, establecer el objetivo para este mes
            targetDate = new Date(currentYear, currentMonth, 14);
        }

        targetDate.setHours(0, 0, 0, 0);

        var finalDate = targetDate.getTime();

        $('.home-content__clock').countdown(finalDate)
            .on('update.countdown finish.countdown', function(event) {
                var str = '<div class=\"top\"><div class=\"time days\">' +
                    '%D <span>day%!D</span>' +
                    '</div></div>' +
                    '<div class=\"time hours\">' +
                    '%H <span>H</span></div>' +
                    '<div class=\"time minutes\">' +
                    '%M <span>M</span></div>' +
                    '<div class=\"time seconds\">' +
                    '%S <span>S</span></div>';

                $(this).html(event.strftime(str));
            });
    };

    /* goIndexGallery
     * ------------------------------------------------------ */
    var goIndexGallery = function() {
        $('body').on('click', '#ver-mas', function() {
            window.location.href = "index-gallery.html";
        });
    };
    

    /* initialize
     * ------------------------------------------------------ */
    (function ssInit() {
        ssPreloader();
        ssInfoToggle();
        ssSlickSlider();
        ssPlaceholder();
        ssFinalCountdown();
        goIndexGallery();
    })();
})(jQuery);
