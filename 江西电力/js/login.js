$().ready(function(){
	indexSize()
	function indexSize(){
		var body_h=$(document).height();
    	var body_w=$(document).width();
    	
    	$('#bg_box').css({
    		'width':body_w+'px',
    		'height':body_h+'px'
    	});
    	$('#popup').css({
    		'margin-top':'60px'
    	})
	}
	
	$(window).resize(function(){
		indexSize()
	});
	
	
	
	
	
})