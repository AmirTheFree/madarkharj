// In the name of Allah

$(function(){
    function refreshData(){
		var data = window.localStorage.getItem('data');
		if (data == null || data == "{}" || data == ''){
			data = '{}';
			window.localStorage.setItem('data',data);
			$('#data>center').html('<br><br>ابتدا از گزینه ها عضوی به گروه اضافه کنید');
		} else {
			data = JSON.parse(data);
			var sorted = Object.keys(data).sort(function(a,b){return data[b] - data[a]});
			var html = '<ul data-role="listview" data-inset="true" id="infotable">';
			for (var key of sorted){
				var color = null;
				if (data[key] > 0){
					color = 'green';
				}else if (data[key] == 0){
					color = 'yellow';
				}else{
					color= 'red';
				}
				html += '<li class="' + color + '">' + key + '<span class="ui-li-count">' + Math.abs(data[key]) + "</span></li>";
			}
			$('#data>center').html('<br>' + html);
			$('ul').listview();
		}
	}
    $(document).on('mobileinit', function(){
        $.mobile.defautlLoadErrorMessage = "متاسفانه خطایی رخ داده است!";
        $.mobile.defaultPageTransition = "flow";
        refreshData();
    });
    $(document).on('pagecontainerbeforeshow',refreshData);

	var settings = window.localStorage.getItem('settings');
	if (settings == null) {
		settings = JSON.stringify({roundValue: 100});
		window.localStorage.setItem('settings',settings);
	}
});