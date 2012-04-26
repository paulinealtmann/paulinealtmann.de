define(['jquery'], function($) {
	$('#next').click(function() {
		var $links = $('nav#thumbbar a');
		for(var i = 0; i < $links.length-1; i++) {
			var $link = $($links.get(i))
			if($link.find('img').hasClass('active')) {
				var $newlink = $($links.get(i+1));
				location.href = $newlink.attr('href');
				$newlink.click();
				break;
			}
		}
	});

	$('#prev').click(function() {
		var $links = $('nav#thumbbar a');
		for(var i = $links.length-1; i > 0; i--) {
			var $link = $($links.get(i))
			if($link.find('img').hasClass('active')) {
				var $newlink = $($links.get(i-1));
				location.href = $newlink.attr('href');
				$newlink.click();
				break;
			}
		}
	});
});
