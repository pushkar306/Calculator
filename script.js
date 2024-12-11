let res = document.getElementById('resN');
let buttons = document.querySelectorAll('button');

let str = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            str = eval(str);
            res.value = str;
        }
        else if(e.target.innerHTML == 'AC'){
            str = "";
            res.value = str;
        }
        else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0, str.length-1);
            res.value = str;
        }
        else{
            str += e.target.innerHTML;
            res.value = str;
        }
    })
})