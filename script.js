let add = document.querySelector('#add');
let items = document.querySelector('.items');
let arr = [];





function load() {

    if (localStorage.task) {
        arr = JSON.parse(localStorage.getItem('task'));


        for (i = 0; i < arr.length; i++) {
            let div = document.createElement('div')
            div.setAttribute('class', 'card');
            div.innerHTML += `${arr[i]}<ion-icon name="checkmark-circle-outline"></ion-icon>`
            items.appendChild(div);

            if (arr[i].length == 0) {
                items.removeChild(div);
            }
        }

        let ion = document.getElementsByName('checkmark-circle-outline');
        let card = document.querySelectorAll('.card');
        card.forEach(function (c, i) {
            ion[i].addEventListener('click', function () {
                c.style = 'display:none';
                arr[i] = [];



                // localStorage.task = JSON.stringify(arr[i])
                localStorage.task = JSON.stringify(arr);
                // console.log(arr)


            })
        })
    }
}


add.addEventListener('click', function () {
    let input = document.querySelector('#input').value;
    let div = document.createElement('div')
    div.setAttribute('class', 'card');
    div.innerHTML = `${input}<ion-icon name="checkmark-circle-outline"></ion-icon>`
    items.appendChild(div)
    arr.push(input);
    document.querySelector('#input').value = '';
    localStorage.setItem('task', JSON.stringify(arr));
    let ion = document.getElementsByName('checkmark-circle-outline');
    let card = document.querySelectorAll('.card');
    card.forEach(function (c, i) {
        ion[i].addEventListener('click', function () {
            c.style = 'display:none';
            arr[i] = [];
            localStorage.task = JSON.stringify(arr);
            // console.log(arr)

        })
    });
})






