$(document).ready(function() {
	
	$('.add-item').on('click', function(e){
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


	$( '.checkboxes' ).on( 'click', 'input[type="checkbox"]', function () {
    	$( this ).closest('p').toggleClass( '.checked');
	});


	$(document).on("click", ".delete-item", function(){
    	$(this).parent().remove();
	});
	
});	


