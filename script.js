let add = document.querySelector('#add');
let items = document.querySelector('.items');
let arr = [];

// function load(){
//     if(localStorage.getItem('task')){
//          arr = JSON.parse(localStorage.getItem('task'));
            // let div = document.createElement('div')
            // div.setAttribute('class', 'card');
//         
            // for(i=0; i < arr.length; i++){
                // div.innerHTML = `${arr[i]}<ion-icon name="checkmark-circle-outline"></ion-icon>`
                // items.appendChild(div);


//         }
//     }

//    



// }


add.addEventListener('click', function () {
    let input = document.querySelector('#input').value;
    let ion = document.getElementsByName('checkmark-circle-outline');
    let card = document.querySelectorAll('.card');

    
    let div = document.createElement('div')
    div.setAttribute('class', 'card');
    div.innerHTML = `${input}<ion-icon name="checkmark-circle-outline"></ion-icon>`


    items.appendChild(div)

    card.forEach(function(c, i){
        ion[i].addEventListener('click', function(){
            c.style = 'display:none';
            
        })
    });





    arr.push(input);
    document.querySelector('#input').value = '';
    localStorage.setItem('task', JSON.stringify(arr));
})






















// card.forEach(function(c, i){
//     console.log(c)
//     ion[i].addEventListener('click', function(){
//         c.innerHTML = ''
//     })
// })




// let card = document.querySelectorAll('.card')


// card.forEach(function (c, i) {
    
//     let ion = document.getElementsByName('checkmark-circle-outline');
    
    // c.innerHTML += '<ion-icon name="checkmark-circle-outline"></ion-icon>'
    
    
//     let div = document.createElement('div');
//     div.setAttribute('class', 'card')
    
//     div.innerHTML = '<ion-icon name="checkmark-circle-outline"></ion-icon>'

//     c.appendChild(div)
//     console.log(div)

//     ion[i].addEventListener('click', function(){
//         c.innerHTML = ''
//     })

// })



    

    


