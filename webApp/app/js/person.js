// In the name of Allah

$("#addperson").on('tap',function(){
    var data = JSON.parse(window.localStorage.getItem('data'));
    var newName = $('[name=name]').val().trim();
    if (!newName){
        alert('لطفا نام را به درستی وارد کنید')
        return false;
    }
    for (var key of Object.keys(data)){
        if (key == newName){
            alert('عضو دیگری با این نام موجود است');
            return false
        }
    }
    data[newName] = 0
    window.localStorage.setItem('data',JSON.stringify(data));
    window.location = 'index.html';
});

var data = JSON.parse(window.localStorage.getItem('data'));

for (var key of Object.keys(data)){
    document.querySelector('[name=name2]').innerHTML += '<option value="' + key + '">' + key + '</option>';
}

$('#deleteperson').on('tap',function(){
    var sure = confirm('آیا از حذف عضو مطمئن هستید؟');
    if (sure){
        var name = $('[name=name2]').val();
        if (!name){
            alert('لطفا یک عضو را انتخاب کنید');
            return false;
        }
        var data = JSON.parse(window.localStorage.getItem('data'));
        for (var key of Object.keys(data)){
            if (name == key){
                delete data[key];
            }
        }
        window.localStorage.setItem('data',JSON.stringify(data));
        window.location = 'index.html';
    }
});