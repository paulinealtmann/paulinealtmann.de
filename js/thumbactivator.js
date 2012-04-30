define(['jquery'], function($) {
	var updateThumbs = function() {
		var curPage = location.hash.replace('#', '.')
		var $thumblinks = $('nav#thumbbar a');
		$thumblinks.removeClass('active');
		$thumblinks.filter(curPage).toggleClass('active');
	}

	$('nav#thumbbar a').click(function() {
		// Give control to the browser to make it realize
		// location.hash has changed.
		setTimeout(function() {
			updateThumbs();
		}, 1);
	});
	updateThumbs();
});
