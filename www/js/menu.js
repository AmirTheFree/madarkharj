// In the name of Allah

function zeroValues() {
	var data = JSON.parse(window.localStorage.getItem('data'));
	for (var key of Object.keys(data)) {
		data[key] = 0;
	}
	window.localStorage.setItem('data', JSON.stringify(data));
	window.location = 'index.html';
}

$('#zero').on('tap', function () {
	var sureZero = confirm('آیا از صفر کردن هزینه ها مطمئن هستید؟!');
	if (sureZero) {
		zeroValues();
	}
});

$('#undo').on('tap', function () {
	var sureUndo = confirm('آیا از یک واگرد به اطلاعات قبل مطمئن هستید؟');
	if (sureUndo) {
		var backup = window.localStorage.getItem('backup');
		if (window.localStorage.getItem('data') == backup) {
			alert('اطلاعات مرحله قبلی با فعلی یکی است!');
			return false;
		}
		if (backup == null || backup == '' || backup == '{}') {
			zeroValues();
			return true;
		}
		window.localStorage.setItem('data',window.localStorage.getItem('backup'));
		window.location = 'index.html';
	}
});