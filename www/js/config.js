// In the name of Allah

$(function(){
    function refreshData(){
		var data = window.localStorage.getItem('data');
		if (data == null || data == "{}"){
			data = '{}';
			window.localStorage.setItem('data',data);
			$('#data>center').html('<br><br>ابتدا از گزینه ها عضوی به گروه اضافه کنید');
		} else {
			$('#data>center').html('<br><br>' + data);
			// data = JSON.parse(data);
			// for (var key of Object.keys(data)){
			// 	// key is name & data[key] is money ...
			// }
		}
	}
    $(document).on('mobileinit', function(){
        $.mobile.defautlLoadErrorMessage = "متاسفانه خطایی رخ داده است!";
        $.mobile.defaultPageTransition = "pop";
        refreshData();
    });
    $(document).on('pagecontainerbeforeshow',refreshData);

	var settings = window.localStorage.getItem('settings');
	if (settings == null) {
		settings = JSON.stringify({roundDirection: true,roundValue: 100});
		window.localStorage.setItem('settings',settings);
	}
});