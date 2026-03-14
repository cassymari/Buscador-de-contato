const lista = document.getElementById("lista-contatos")
const inputBusca = document.getElementById("buscar")

let contatos = JSON.parse(localStorage.getItem("contatos")) || []

function salvarLocalStorage() {
    localStorage.setItem("contatos", JSON.stringify(contatos))
}

function adicionarContato() {

    const nome = document.getElementById("nome").value
    const telefone = document.getElementById("telefone").value

    if (nome === "" || telefone === "") {
        alert("Preencha todos os campos")
        return
    }

    contatos.push({ nome, telefone })

    salvarLocalStorage()

    mostrarContatos()
    document.getElementById("nome").value = ""
    document.getElementById("telefone").value = ""

}

function mostrarContatos(listaContatos = contatos) {

    lista.innerHTML = ""

    listaContatos.forEach((contato, index) => {

        const li = document.createElement("li")

        li.innerHTML = `
<div class="contato-info">

<div class="avatar">${contato.nome.charAt(0).toUpperCase()}</div>

<div>
<strong>${contato.nome}</strong><br>
${contato.telefone}
</div>

</div>

<div class="acoes">

<button class="editar" onclick="editarContato(${index})">✏️</button>

<button class="excluir" onclick="removerContato(${index})">❌</button>

</div>
`

        lista.appendChild(li)

    })

}



function removerContato(index) {

    contatos.splice(index, 1)

    salvarLocalStorage()

    mostrarContatos()

}

function editarContato(index) {

    const novoNome = prompt("Editar nome:", contatos[index].nome)
    const novoTelefone = prompt("Editar telefone:", contatos[index].telefone)

    if (novoNome && novoTelefone) {

        contatos[index].nome = novoNome
        contatos[index].telefone = novoTelefone

        salvarLocalStorage()

        mostrarContatos()

    }

}

function buscarContato() {

    const valorBusca = inputBusca.value.toLowerCase()

    const contatosFiltrados = contatos.filter(contato =>
        contato.nome.toLowerCase().includes(valorBusca)
    )

    mostrarContatos(contatosFiltrados)

}


mostrarContatos()

function toggleContatos() {

    const caixa = document.getElementById("caixa-contatos")

    if (caixa.style.display === "none" || caixa.style.display === "") {

        caixa.style.display = "block"

    } else {

        caixa.style.display = "none"

    }

}

const botaoTema = document.getElementById("toggle-tema")

botaoTema.addEventListener("click", () => {

document.body.classList.toggle("dark-mode")

if(document.body.classList.contains("dark-mode")){

botaoTema.textContent = "☀️ Modo claro"

}else{

botaoTema.textContent = "🌙 Modo escuro"

}

})