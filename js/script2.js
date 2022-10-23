// 1 - Editar o cliente que foi adicionado
//2- No adicionar cliente pedir a quantidade de clientes que serão adicionados

function adicionar() {

    let cliente = document.getElementById('tr');
    const tr = document.createElement('tr');

    let qtd = prompt('Quantos clientes deseja adicionar?');

    for (let i = 0; i < qtd; i++) {

        const nome = prompt('Digite o nome do cliente');
        const email = prompt('Digite o e-mail do cliente');
        const telefone = prompt('Digite o telefone do cliente');
        const clientes = document.getElementById('clientes');
        const tr = document.createElement('tr');
        const tdNome = document.createElement('td');
        tdNome.innerText = nome;
        const tdEmail = document.createElement('td');
        tdEmail.innerText = email;
        const tdTelefone = document.createElement('td');
        tdTelefone.innerText = telefone;

        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTelefone);

        clientes.appendChild(tr);

    }
}
document.getElementById('add').addEventListener('click', adicionar);


function alterar(elemento) {
    elemento.innerText = prompt('Qual o novo texto?');
}

const itemsLista = document.querySelectorAll('td');
for (let i = 0; i < itemsLista.length; i++) {
    itemsLista[i].addEventListener('click', function () {
        alterar(this);
    })
}
