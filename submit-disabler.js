/*
	$("form").disableDoubleSubmit() to mark all forms
	$("#form") to specify a specific form
	
	ex:
	$(function(){
		$("form").disableDoubleSubmit();
	});
*/
(function ($) {
    $.fn.disableDoubleSubmit = function (options) {

        var settings = $.extend({
            disablelinks: false
        }, options);

        return this.each(function () {
            $(this).on("submit", function (evt) {

                var buttonSelectors = "input[type=submit],button[type=submit]";

                var $buttons = $(this).find(buttonSelectors);
                if ($buttons.hasClass("no-pointer-events")) {
                    return false;
                }

                $.each($buttons, function (index, elem) {
                    $(elem).addClass("no-pointer-events");
                    $(elem).addClass("disabled");
                });

                if (settings.disablelinks === true) {
                    var a = $(this).find("a");
                    
                    a.addClass("disabled");
                    a.addClass("no-pointer-events");
                    a.attr("href", "javascript:void(0);");
                }

                setTimeout(function () {
                    return true;
                }, 50);
            });
        });

        return this;
    };
}(jQuery));
