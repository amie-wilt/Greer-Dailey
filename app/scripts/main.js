'use strict';

(function ($) {

    $('.mobile-menu-trigger').on('click', function () {
        $('.header-primary-nav-container').toggleClass('mobile-menu-active');
    });

    $('[data-drawer="drawer"]').each(function () {
        var $this = $(this),
            $toggleTrigger = $this.find('[data-drawer="toggle-trigger"]'),
            $closeTrigger = $this.find('[data-drawer="close-trigger"]'),
            $content = $this.find('[data-drawer="content"]'),
            drawerId = $content.attr('id'),
            $dropdownLink = $('[data-dropdown-link="' + drawerId + '"]');

        $toggleTrigger.on('click', function (e) {
            e.preventDefault();
            $content.slideToggle();
        });

        $closeTrigger.on('click', function () {
            $content.slideUp();
        });

        if (window.location.hash.slice(1) === $content.attr('id')) {
            $content.show();
        }

        if ($dropdownLink.length) {
            $dropdownLink.on('click', function () {
                $content.show();
            });
        }

    });

    var recipients = [];

    function addRecipient(email) {
        recipients.push(email);
    }

    function removeRecipient(email) {
        var position = recipients.indexOf(email);

        if (position !== -1) {
            recipients.splice(position, 1);
        }
    }

    var $recipients = $('[data-contact-form="email-recipients"]');
    function setRecipients() {
        var emails = recipients.toString();

        $recipients.val(emails);
    }

    $('[data-email-address]').GDZ_Checkbox({
        onChange: function (checked) {
            var email = this.$el.data('email-address');

            if (checked) {
                addRecipient(email);
            } else {
                removeRecipient(email);
            }
            console.log('Recipients are now: ', recipients);

            setRecipients();
        }
    });

    $('[data-contact-form]')
        .on('submit', function (e) {
            e.preventDefault();

            if ($(this).parsley().isValid() ) {
                $.post('contact-form.php', function () {
                    window.location.href = 'contact-thanks.html';
                });
            }
        })
        .parsley({
            errorsContainer: function (field) {
                var $el = field.$element;
                return $el.closest('.field');
            }
        });



})(jQuery);
