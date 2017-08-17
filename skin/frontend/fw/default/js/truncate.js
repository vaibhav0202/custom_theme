// Show-Hide Product Description
(function($j){
	$j(function(){
		var exp = $j('.exp');
		var readMore = $j("label[for='read-more']");
		var checkBox = $j('#read-more');
		var wrapperHeight = $j('.desc-wrapper').height();

		// Hide more-link & gradient if short product description
		if ((exp.height() < 145) ||
	   	((exp.height() === 145) && (wrapperHeight < 175))) { // Prevent bottom-margin false trigger
			readMore.hide();
			exp.addClass('hideafter');
			exp.css('max-height', wrapperHeight);
		}
	
		// Set max-height on click
		$j("label[for='read-more']").click(function() {
			var wrapperHeight = $j('.desc-wrapper').height();
			if (exp.height() === 145) {
				exp.css('max-height', wrapperHeight);
				checkBox.prop('checked', true);
			} else if (exp.height() > 145) {
				exp.css('max-height', '145px');
				checkBox.prop('checked', false);
			}
		
			return false;
		});
	
		return false;
	});
})(jQuery);