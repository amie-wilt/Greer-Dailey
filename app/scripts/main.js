'use strict';

(function($) {

    $('.mobile-menu-trigger').on('click', function() {
        $('.header-primary-nav-container').toggleClass('mobile-menu-active');
    });

    $('[data-drawer="toggle-trigger"]').on('click', function(e) {
        e.preventDefault();
        $($(this).attr('href'))
            .find('[data-drawer="content"]')
            .slideToggle();
    });

    $('[data-drawer="close-trigger"]').on('click', function() {
        $(this)
            .closest('[data-drawer="content"]')
            .slideUp();
    });

})(jQuery);
