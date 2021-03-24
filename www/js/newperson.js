// In the name of Allah

$("#addperson").on('tap',function(){
    var storage = window.localStorage;
    var data = JSON.parse(storage.getItem('data'));
    var newName = $('[name=name]').val();
    for (var key of Object.keys(data)){
        if (key == newName){
            alert('عضو دیگری با این نام موجود است');
            return false
        }
    }
    data[newName] = 0
    storage.setItem('data',JSON.stringify(data));
    window.location = 'index.html';
});