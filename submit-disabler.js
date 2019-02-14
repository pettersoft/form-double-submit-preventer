/*
	$("form").disableDoubleSubmit() to mark all forms
	$("#form") to specify a specific form
	
	EX:
	$(function(){
		$("form").disableDoubleSubmit();
	});
*/
(function ($){
	$.fn.disableDoubleSubmit = function(){
		
		return this.each(function(){	
			$(this).on("submit", function(evt){
				evt.preventDefault();
			
				$(this).find("input[type=submit]").attr("disabled", "disabled");
				$(this).find("button[type=submit]").attr("disabled", "disabled");
							
				this.submit();
			});
		});
		
		return this;
	};
}(jQuery));