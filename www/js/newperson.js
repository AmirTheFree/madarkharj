// In the name of Allah

$("#addperson").on('tap',function(){
    var data = JSON.parse(window.localStorage.getItem('data'));
    var newName = $('[name=name]').val();
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