(function () {

    module.exports.register = function (Handlebars, options) {

        Handlebars.registerHelper('dasherize', function (string) {
            return string
                .replace(/\s+/g, '-')
                .toLowerCase()
                .replace('-&', '');
        });

    };

}).call(this);
