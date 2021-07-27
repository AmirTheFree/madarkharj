// In the name of Allah

document.getElementById('total').innerText = parseInt(window.localStorage.getItem('total'));
$('#clear').on('tap', function () {
    var sure = confirm('آیا از پاک کردن تمام سابقه و کل مبلغ خرج شده مطمئن هستید؟');
    if (sure) {
        window.localStorage.setItem('total', 0);
        window.localStorage.setItem('historia', JSON.stringify([]));
    }
});
var historia = window.localStorage.getItem('historia');
if ((historia == null) || (historia == '') || (historia == '[]')) {
    document.getElementById('container').innerText = 'هیچ سابقه ای موجود نیست';
} else {
    console.log(historia);
    historia = JSON.parse(historia);
    historia.forEach(element => {
        document.getElementById('container').innerHTML += '<div class="ui-body ui-body-a ui-corner-all">' + element + '</div>'
    });
}