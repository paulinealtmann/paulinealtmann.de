define(['jquery'], function($) {
	var clickLink = function($links, idx) {
			var $newlink = $($links.get(idx));
			location.href = $newlink.attr('href');
			$newlink.click();
	}

	$('#next').click(function() {
		var $links = $('nav#thumbbar a');
		for(var i = 0; i < $links.length-1; i++) {
			var $link = $($links.get(i))
			if($link.hasClass('active')) {
				clickLink($links, i+1);
				return
			}
		}
		// No project is active
		clickLink($links, 0);
	});

	$('#prev').click(function() {
		var $links = $('nav#thumbbar a');
		for(var i = $links.length-1; i > 0; i--) {
			var $link = $($links.get(i))
			if($link.hasClass('active')) {
				clickLink($links, i-1);
				return;
			}
		}
		// No project is active
		clickLink($links, $links.length-1);
	});
});
