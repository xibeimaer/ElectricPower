$().ready(function(){
	indexSize()
	function indexSize(){
//		var body_h=$(document).height();
    	var body_w=$(document).width();
    	
    	$('#body').css({
    		'width':body_w+'px'
//  	
    	});
    	

	}
	
	$(window).resize(function(){
		indexSize()
	});
	
		for(var i=0; i<$('#header .zhe1').length; i++){
			$('#header .zhe1')[i].index=i;
		
			$($('#header .zhe1')[i]).mouseover(function(){
				for(var j=0; j<$('#header .zhe1').length; j++){
					$($('#header .zhe1')[j]).css('background','#ffff')
				}
				
				$($('#header .zhe1')[this.index]).css('background','url(./images/images/images/div_bg_04.png);')
//				alert('hah')
			})
			
			
			
		}
		

	
	
})