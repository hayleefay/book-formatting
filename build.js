// $(document).ready(function(){
// 	var changeFontSize = function(fontSize){
// 		console.log("Goodbye!");
// 		document.getElementById('paragraph').style.fontSize = fontSize;
// 	}
// 	var setFontEventListener = function(fontButton, fontSize){
// 		console.log("Hello!");
// 		document.getElementById(fontButton).addEventListener("click",function(){
// 			changeFontSize(fontSize)
// 		},false);
// 	}
// 	setFontEventListener("fontSize10", "0.625em");
// 	setFontEventListener("fontSize12", "0.75em");
// 	setFontEventListener("fontSize14", "0.875em");
// 	setFontEventListener("fontSize16", "1em");
// 	setFontEventListener("fontSize20", "1.25em");
// 	setFontEventListener("fontSize24", "1.5em");
// 	setFontEventListener("fontSize30", "1.875em");
// });

$(document).ready(function(){
	$('.changeSize').on("click", function(){
		var fontSize = $(this).attr('data-fontSize');
		$('#paragraph').css('font-size', fontSize);
	})
})
$(document).ready(function(){
	$('.changeFont').on("click", function(){
		var font = $(this).attr('data-font');
		$('#paragraph').css('font-family', font);
	})
})