//Itens que receberão eventos
let add = document.querySelector('#add');
let items = document.querySelector('.items');


//Array que armazenara as tarefas que o usuário digitar.
let arr = [];


//Função a ser executada quando a página carregar.
function load() {

    //Aqui testo se o atributo 'task' existe, que é o atributo em que coloquei as tarefas.
    if (localStorage.task) {
        arr = JSON.parse(localStorage.getItem('task'));

        //Faço um laço de repetição para que todas as tarefas existente sejam expostas.
        for (i = 0; i < arr.length; i++) {
            let div = document.createElement('div')
            div.setAttribute('class', 'card');
            div.innerHTML += `<p>${arr[i]}</p><ion-icon name="checkmark-circle-outline"></ion-icon>`
            items.appendChild(div);

            //Porém se o array estiver vazio, nada será mostrado na tela ao carregar a página.
            if (arr[i].length == 0) {
                div.style = 'display:none';
            }
        }

        //Aq eu busco dois identificados em que serão percorridos todos seus elementos.
        let ion = document.getElementsByName('checkmark-circle-outline');
        let card = document.querySelectorAll('.card');

        //Percorrendo o array card.
        card.forEach(function (c, i) { //'c' são os itens de card e 'i' os indices.
            //Colocando 'ion' que são os icones de exclusão de tarefas para excluirem tarefas ao serem clicados.
            ion[i].addEventListener('click', function () {
                //Se clicado então, os itens 'c' são apagados da tela, e o item do array clicado sumirá.
                c.style = 'display:none';
                arr[i] = [];
                localStorage.task = JSON.stringify(arr);
                //O atributo será uma stringfy.
            })
        })
    }
}

//Botão de adicionar tarefas.
add.addEventListener('click', function () {
    //Pegando o valor de input, que são as tarefas digitadas pelo usuário e setando uma div para expor os itens.
    let input = document.querySelector('#input').value.toUpperCase();
    let div = document.createElement('div');


    if (!input) {
        alert('Digite a tarefa no campo indicado!');
        div.style = 'display:none';
    }

    let num = 0
    arr.forEach(function (e, i) {

        if (arr[i] == input && input.length >= 1) {
            alert('A tarefa já se encontra na lista.');
            div.style = 'display:none';
            num += 1;
            console.log(num)
        }
    })

    if (num < 1) {
        //Setando atributo class com o valor card para a div, passando seu inner e após isso adicionando como filho de items.
        div.setAttribute('class', 'card');
        div.innerHTML = `<p>${input}</p><ion-icon name="checkmark-circle-outline"></ion-icon>`
        items.appendChild(div);

        //Passando a tarefa para a ultima posição do array.
        arr.push(input);
    }

    //Limpando o input;
    document.querySelector('#input').value = '';
    localStorage.setItem('task', JSON.stringify(arr));

    //Percorrendo o array card.
    let ion = document.getElementsByName('checkmark-circle-outline');
    let card = document.querySelectorAll('.card');
    card.forEach(function (c, i) {//'c' são os itens de card e 'i' os indices.
        //Colocando 'ion' que são os icones de exclusão de tarefas para excluirem tarefas ao serem clicados.
        ion[i].addEventListener('click', function () {
            //Se clicado então, os itens 'c' são apagados da tela, e o item do array clicado sumirá.
            c.style = 'display:none';
            arr[i] = [];
            localStorage.task = JSON.stringify(arr);
            //O atributo será uma stringfy.

        })
    });
})
//Fim