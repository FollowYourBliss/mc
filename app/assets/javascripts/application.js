// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
console.log("application.js init");
$(document).on('click', '#sprawdz', function() {
 $(".check-me").each(function(i, obj) {
 	$(this).parent().removeClass("dobrze");
 	$(this).parent().removeClass("zle");

    if (this.checked){
    	var odpowiedz = $(this).attr("oczek");
    	if (odpowiedz == "true"){
    		console.log("Dobrze");
    		$(this).parent().addClass("dobrze");
    	}else
    	{
    		console.log("Zle");
    		$(this).parent().addClass("zle");
    	}
    }else{
		var odpowiedz = $(this).attr("oczek");
		if (odpowiedz == "true"){
    		console.log("Zle");
    		$(this).parent().addClass("zle");
    	}else
    	{
    		console.log("Dobrze");
    		$(this).parent().addClass("dobrze");
    	}
    }

});

});

$(document).on('click', '#nast', function() { 
	; 
$(".check-me").each(function(i, obj) {
 	$(this).attr('checked', false);
});

location.reload()
});