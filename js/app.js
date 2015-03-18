$(document).ready(function() {
	
	function Add(){
		var item = $('.inputitem').val();
		$('.shopping-list').append(
			"<tr>"+
				"<td><input type='checkbox' name='check1'></td>"+
				"<td><p>"+
				item +
				"</p></td>"+
				"<td><input type='image' src='images/xicon.svg' class='delete-item' height='40em'/></td>"+
			"</tr>"
		);
	};
	$('.add-item').bind("click", Add);

	$('.add-item').click(function(e){
		e.preventDefault()
		var newitem = $('.inputitem').val();
		console.log(newitem)
		$('.inputitem').val('');
	})

	function Delete(){
		var par = $(this).parent().parent(); //tr
		par.remove();
	};

	$('.delete-item').bind("click", Delete);

	$( '.checkboxes' ).on( 'click', 'input[type="checkbox"]', function () {
    $( this ).next().toggleClass( '.checked');
	});
});	