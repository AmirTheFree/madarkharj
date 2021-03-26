// In the name of Allah

var data = JSON.parse(window.localStorage.getItem('data'));

for (var key of Object.keys(data)){
    document.querySelector('[name=payer]').innerHTML += '<option value="' + key + '">' + key + '</option>';
    document.getElementById('users').innerHTML += '<input type="checkbox" name="users" id="' + key +'" value="' + key + '">\n<label class="chcklbl" for="' + key + '">' + key + "</label>";
}