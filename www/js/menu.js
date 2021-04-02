// In the name of Allah

$('#zero').on('tap',function(){
	var sure = confirm('آیا از صفر کردن هزینه ها مطمئن هستید؟!');
	if (sure){
		data = JSON.parse(window.localStorage.getItem('data'));
		for (var key of Object.keys(data)){
			data[key] = 0;
		}
		window.localStorage.setItem('data',JSON.stringify(data));
		window.location = 'index.html';
	}
});