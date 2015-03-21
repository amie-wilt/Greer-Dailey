'use strict';

(function($) {

    $('.mobile-menu-trigger').on('click', function() {
        $('.header-primary-nav-container').toggleClass('mobile-menu-active');
    });

    $('.expertise-section-open-trigger').on('click', function(e) {
        e.preventDefault();
        $($(this).attr('href')).slideToggle();
    });

    $('.expertise-section-top-close-button, .expertise-section-bottom-close-button').on('click', function() {
        $(this).closest('.expertise-section').slideUp();
    });

})(jQuery);
