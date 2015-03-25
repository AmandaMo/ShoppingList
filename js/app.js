$(document).ready(function() {
	
	$('.add-item').on('click', function(e){
		e.preventDefault();
		if ($('.inputitem').val().length === 0)
		{
		}
		else {
		var newitem = $('.inputitem').val();
		console.log(newitem);
		$('.shopping-list').append(
			"<li>"+
				"<input type='checkbox' name='check1' class='column'>"+
				"<p class='column'>"+
				newitem +
				"</p>"+
				"<input type='image' src='images/xicon.svg' class='column delete-item' height='40em'/></li>"+
			"</li>"
		);
		$('.inputitem').val('');
		}
	});

	$('.add-item').keyup(function(e){
		e.preventDefault();
		var newitem = $('.inputitem').val();
		console.log(newitem);
		$('.shopping-list').append(
			"<li>"+
				"<input type='checkbox' name='check1' class='column'>"+
				"<p class='column'>"+
				newitem +
				"</p>"+
				"<input type='image' src='images/xicon.svg' class='column delete-item' height='40em'/></li>"+
			"</li>"
		);
		$('.inputitem').val('');
	});

	$(document).on("click", ".checkbox", function(){
		if ($('input.checkbox').is(':checked')) {
	        $(this).next("p").toggleClass( 'checked');
	        console.log("checked");
	    }
	    else{

	    }
	});

	$(document).on("click", ".delete-item", function(){
    	$(this).parent().fadeOut(600);
	});
	
});

