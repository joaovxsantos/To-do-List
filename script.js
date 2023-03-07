let add = document.querySelector('#add');
let items = document.querySelector('.items');
let arr = [];


function load(){
    if(localStorage.getItem('task')){
        arr = JSON.parse(localStorage.getItem('task'));
        for(i=0; i < arr.length; i++){
            items.innerHTML += `<div><p>${arr[i]}</p><ion-icon name="checkmark-circle-outline"></ion-icon></div>`
        }
    }
}


add.addEventListener('click', function () {

    let input = document.querySelector('#input').value;



    items.innerHTML += `<div><p>${input}</p><ion-icon name="checkmark-circle-outline"></ion-icon></div>`





    arr.push(input);
    document.querySelector('#input').value = '';
    localStorage.setItem('task', JSON.stringify(arr));



    let icons = document.getElementsByName('checkmark-circle-outline');


    icons.forEach((e) => {
        e.addEventListener('click', function () { console.log('a') })
    })


})









