// In the name of Allah

$(function(){
	$("[data-role=header],[data-role=footer]").toolbar();

	function refreshData(){
		var storage = window.localStorage;
		var data = storage.getItem('data');
		if (data === null || data === "{}"){
			$('#data>center').html('<br><br>ابتدا از گزینه ها عضوی به گروه اضافه کنید');
		} else {
			data = JSON.parse(data);
			for (var key of Object.keys(data)){
				// key is name & data[key] is money ...
			}
		}
	}

	$(document).on('pagebeforecreate',refreshData);
	$(document).on('pagecontainerbeforeshow',refreshData);

});
