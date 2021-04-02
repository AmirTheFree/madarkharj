// In the name of Allah

var settings = JSON.parse(window.localStorage.getItem('settings'));
(settings.roundDirection) ? $('#up').attr('checked','checked') : $('#down').attr('checked','checked');
if (settings.roundValue == 100){
    $('#100').attr('checked','checked');
} else if (settings.roundValue == 500){
    $('#500').attr('checked','checked');
} else if (settings.roundValue == 1000){
    $('#1000').attr('checked','checked')
}

$('#savesettings').on('tap', function(){
    $('[name=roundDirection]:checked').val() == 'up' ? settings.roundDirection = true : settings.roundDirection = false;
    settings.roundValue = $('[name=roundValue]:checked').val();
    window.localStorage.setItem('settings',JSON.stringify(settings));
    window.location = 'index.html';
});