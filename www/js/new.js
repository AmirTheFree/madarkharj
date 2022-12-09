// In the name of Allah

var data = JSON.parse(window.localStorage.getItem('data'));
var settings = JSON.parse(window.localStorage.getItem('settings'));

for (var key of Object.keys(data)) {
    document.querySelector('[name=payer]').innerHTML += '<option value="' + key + '">' + key + '</option>';
    document.getElementById('users').innerHTML += '<input type="checkbox" name="users" id="' + key + '" value="' + key + '">\n<label class="chcklbl" for="' + key + '">' + key + "</label>";
}

$('[type=checkbox]').on('change',function(){
    $('#price').blur();
});

$('#reg').on('tap', function () {
    var payer = $('[name=payer]').val();
    if (!payer) {
        alert('لطفا خرج کننده را انتخاب کنید');
        return false;
    }
    var price = parseInt($('[name=price]').val());
    if (!Number.isInteger(price) || !price > 0) {
        alert('لطفا مبلغ را به درستی وارد کنید');
        return false;
    }
    var users = $('[name=users]:checked');
    if (users.length == 0) {
        alert('لطفا مصرف کنندگان را انتخاب کنید');
        return false;
    }
    var reason = $('[name=reason]').val();
    if (!reason) {
        reason = '?';
    }
    var div = Math.round(price / users.length);
    var divFloor = div;
    var divCiel = div;
    while (divFloor % settings.roundValue != 0){
        divFloor -= 1;
    }
    while (divCiel % settings.roundValue != 0){
        divCiel += 1;
    }
    ((divCiel - div) > (div - divFloor)) ? div = divFloor : div = divCiel;
    var originalPrice = price;
    price = div * users.length;
    data[payer] += price;
    var usersString = '';
    for (var i = 0;i < users.length;i++){
        data[users[i].attributes.value.value] -= div;
        usersString += users[i].attributes.value.value + ', ';
    }
    var historia = JSON.parse(window.localStorage.getItem('historia'));
    var date = new persianDate();
    historia.unshift('در تاریخ <b class="info">' + date.format('dddd YYYY/MM/DD') + '</b> ساعت <b class="info">' + date.format('HH:mm') + '</b> <b class="primary">' + payer + '</b> برای <b class="primary">' + usersString + '</b> مبلغ <b class="success">' + price + '(' + originalPrice + ')' + ' </b> به خاطر <b>' + reason + '</b> خرج کرد و دنگ هر نفر شد <b class="success">' + div + '</b>.');
    window.localStorage.setItem('historia',JSON.stringify(historia));
    window.localStorage.setItem('total',parseInt(window.localStorage.getItem('total')) + price);
    window.localStorage.setItem('backup',window.localStorage.getItem('data'));
    window.localStorage.setItem('data',JSON.stringify(data));
    window.location = 'index.html';
});