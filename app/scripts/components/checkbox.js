(function ($, window, document, undefined) {

    'use strict';

    var name = 'Checkbox';

    function Checkbox(element, index, options) {

        this.$el = $(element);
        this.instanceId = index;
        this.options = $.extend({}, $.GDZ.fn[name].defaults, options);
        this.init();
    }

    Checkbox.prototype = {

        name: name,

        /**
         * Initialize function
         */
        init: function () {

            var self = this;

            this.$input = self.$el.find('input');
            this.activeClass = 'checkbox-active';

            this.$input
                .on({
                    'change': function () {
                        var checked = self.$input.prop('checked');

                        if (checked) {
                            self._check();
                        } else {
                            self._uncheck();
                        }

                        if (self.options.onChange && typeof self.options.onChange === 'function') {
                            self.options.onChange.call(self, checked);
                        }
                    },
                    'focus': function () {
                        self.$el
                            .addClass('checkbox-focused');
                    },
                    'blur': function () {
                        self.$el
                            .removeClass('checkbox-focused');
                    }
                });

            if (self.$input.prop('checked')) {
                self._check();
            }
        },

        /**
         * Destroy an instance of the plugin.
         */
        destroy: function (complete) {

            this.$trigger
                .off('click');

            this.$input
                .off('change focus blur');

            complete.call(this);

        },

        _check: function () {
            this.$el
                .addClass(this.activeClass);
        },

        _uncheck: function () {
            this.$el
                .removeClass(this.activeClass);
        }

    };

    $.GDZ.fn.pluginGenerator(Checkbox);

})(jQuery, window, document);
