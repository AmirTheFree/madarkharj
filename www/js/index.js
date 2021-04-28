// In the name of Allah

$(function(){
	$("[data-role=header],[data-role=footer]").toolbar();
});

$('#exit').on('click',function(){
	navigator.app.exitApp();
});
