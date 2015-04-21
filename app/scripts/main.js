'use strict';

(function($) {

    $('.mobile-menu-trigger').on('click', function() {
        $('.header-primary-nav-container').toggleClass('mobile-menu-active');
    });

    $('[data-drawer="drawer"]').each(function() {
        var $this = $(this),
            $toggleTrigger = $this.find('[data-drawer="toggle-trigger"]'),
            $closeTrigger = $this.find('[data-drawer="close-trigger"]'),
            $content = $this.find('[data-drawer="content"]'),
            drawerId = $content.attr('id'),
            $dropdownLink = $('[data-dropdown-link="' + drawerId + '"]');

        $toggleTrigger.on('click', function(e) {
            e.preventDefault();
            $content.slideToggle();
        });

        $closeTrigger.on('click', function(){
            $content.slideUp();
        });

        if(window.location.hash.slice(1) === $content.attr('id')) {
            $content.show();
        }

        if($dropdownLink.length) {
            $dropdownLink.on('click', function(){
                $content.show();
            });
        }

    });

    $('[data-checkbox]').GDZ_Checkbox();

    $('[data-contact-form]').parsley({
        errorsContainer: function(field) {
            var $el = field.$element;
            return $el.closest('.field');
        }
    });

    $(function(){
        $('#contact-form').submit(function(e){

            // Stop the form actually posting
            e.preventDefault();

            // Send the request
            $.post('/contact-form.php', {
                firstName: $('#contact-form-first-name').val(),
                lastName: $('#contact-form-last-name').val(),
                email: $('#contact-form-email').val(),
                comments: $('#questions-comments').val()
                //bacon: $('.bacon:checked').val(),
                //checkme: $('#checkme').is(':checked')
            }, function(d){
                // Here we handle the response from the script
                // We are just going to alert the result for now
                return(d);
            });
        });
    });



})(jQuery);
