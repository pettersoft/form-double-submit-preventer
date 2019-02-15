/*
	$("form").disableDoubleSubmit() to mark all forms
	$("#form") to specify a specific form
	
	EX:
	$(function(){
		$("form").disableDoubleSubmit();
	});
*/
(function ($) {
    $.fn.disableDoubleSubmit = function (options) {

        var settings = $.extend({
            disableLinks: false
        }, options);

        return this.each(function () {
            $(this).on("submit", function (evt) {
                evt.preventDefault();

                $(this).find("input[type=submit]").attr("disabled", "disabled");
                $(this).find("button[type=submit]").attr("disabled", "disabled");

                if (settings.disableLinks === true) {
                    $(this).find("a").attr("disabled", "disabled");
                    $(this).find("a").attr("href", "javascript:void(0);");
                }
		    
                // this.submit() will not work if any element is named/id:d submit
                HTMLFormElement.prototype.submit.call(this);
            });
        });

        return this;
    };
}(jQuery));
