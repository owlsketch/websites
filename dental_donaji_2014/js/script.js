$(document).ready(function() {
		headertoggle($(this).width());
		
		//get current url, if <a> has same url,"highlight"
		var url = window.location.href; 
		$("#links_top ul li a").each(function() {
				if(url == (this.href)) { 
						$(this).closest("a").css("color","#707070");
					 }
				});

		//resizing parameters for layout
		var width = $(this).width();
		$(window).resize(function() {
		width = $(this).width();
		headertoggle(width);
		});
		
});

function headertoggle(width){
		if(width < 800)
		{
			$("#links_top ul li").css("margin-right","5px");
			$("#links_top ul li").css("padding-right","5px");
			$("#links_top ul li").css("padding-left", "5px");
			$("#links_left").css("padding-left","5px");
			$("#navigation").css("padding-left","4px");
			$("#navigation").css("padding-right","4px");
			$("#navigation").css("margin-right","0px");
			$("#navigation").css("margin-left","0px");
			$("body").width("95%");
		}
		else if(width >= 800) {
			$("#links_top ul li").css("margin-right","15px");
			$("#links_top ul li").css("padding-right","15px");
			$("#links_top ul li").css("padding-left", "15px");
			$("#links_left").css("padding-left","40px");
			$("#navigation").css("padding-left","15px");
			$("#navigation").css("padding-right","15px");
			$("#navigation").css("margin-right","15px");
			$("#navigation").css("margin-left","5px");
			$("body").width("90%");
		}
}

//need toggle
