function changeColor(){
    var h1 = document.getElementById('header');
    h1.style.fontSize = '45px';
    h1.style.color = 'green';
}

function validate(){
    var x = document.forms['myform']['name'].value;
    if(x == ''){
        var p = document.getElementById('paragraph');
        p.innerHTML = 'Name cannot be null'
    }
}