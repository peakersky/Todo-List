$('ul').on('click', 'li', function(){
//click the li links and toggle completed class
	$(this).toggleClass("completed");
});

// append the value of the input to the ul. 
$('input').on('keypress', function(event){
	// console.log('keypress')
	if (event.which === 13) {
		if ($(this).val() === "") {
			return;
		}
		var todo = $(this).val();
		$('ul').append("<li><span><i class='fa fa-trash' aria-hidden='true'></span></i>" + todo + "</li>");
		$(this).val("");
	}
});

//click the x to fadeout the li, and remove the element. 
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// fadeToggle text input on the click of the + icon. 
$('.fa-pencil').on('click', function(){
	// console.log($('input[type=text]'))
	$('input[type=text]').fadeToggle(500);
});
