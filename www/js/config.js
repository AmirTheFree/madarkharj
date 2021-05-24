// In the name of Allah

$(function(){
    function refreshData(){
		var data = window.localStorage.getItem('data');
		var total = parseInt(window.localStorage.getItem('total'));
		if (data == null || data == "{}" || data == ''){
			data = '{}';
			window.localStorage.setItem('data',data);
			$('#data>center').html('<br><br>ابتدا از گزینه ها عضوی به گروه اضافه کنید');
		} else {
			data = JSON.parse(data);
			var html = '<ul data-role="listview" data-inset="true" id="infotable">';
			for (var key of Object.keys(data)){
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
			html += '</ul>گردش مالی: ' + total + '<a id="zeroTotal" class="red ui-btn ui-btn-inline" onclick="var sureZeroTotal = confirm(\'آیا از صفر کردن گردش مالی مطمئن هستید؟\');if (sureZeroTotal){window.localStorage.setItem(\'total\',\'0\');window.location = \'index.html\';}">صفر</a>';
			$('#data>center').html(html);
			$('ul').listview();
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
		settings = JSON.stringify({roundValue: 100});
		window.localStorage.setItem('settings',settings);
	}
	if (window.localStorage.getItem('total') == null){
		window.localStorage.setItem('total','0');
	}
});