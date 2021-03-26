// In the name of Allah

var settings = JSON.parse(window.localStorage.getItem('settings'));
(settings.roundDirection) ? document.getElementById('up').setAttribute('selected','selected') : document.getElementById('up').setAttribute('selected','selected');
if (settings.roundValue == 100){
    document.getElementById('100').setAttribute('selected','selected');
} else if (settings.roundValue == 500){
    document.getElementById('500').setAttribute('selected','selected');
} else if (settings.roundValue == 1000){
    document.getElementById('1000').setAttribute('selected','selected')
}