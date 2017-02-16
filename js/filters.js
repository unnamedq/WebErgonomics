$(document).ready(function(){
$("input[type=checkbox]").click(function(){
	var filter = [];
	var urls = [];
	var ext = [];
	var imgs = $("img");
	imgs.toArray().forEach(function(el){
		var b = $(el);
		urls.push(b);
		b.hide();
	});

	var cb = $("input[type=checkbox]:checked");

	cb.toArray().forEach(function(el){
		var b = $(el);
		filter.push(b.attr("value"));
	});

	urls.forEach(function(ur){
		filter.forEach(function (fl)
		{
			img = ur.attr("src");
			if(img.substring(img.length-3)==fl){
				ext.push(ur);
				}
		});
	});
	
	ext.forEach(function(ur){
		ur.show();			
	});

	});
});
