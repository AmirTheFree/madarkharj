// In the name of Allah

$(function(){
    function refreshData(){
		var storage = window.localStorage;
		var data = storage.getItem('data');
		if (data === null || data === "{}"){
			data = '{}';
			storage.setItem('data',data);
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
});