let p = document.querySelector("p")
let input = document.querySelector("input")

const contacts = [
    { name: 'Camila', number: '(21) 99685-2415' },
    { name: 'Cristiane', number: '(21) 99584-7152' },
    { name: 'Felipe', number: '(21) 99685-5274' },
    { name: 'Jusefa', number: '(21) 99685-3333' },
    { name: 'Isabella', number: '(21) 99684-7523' },
]

function search() {
    let found = false
    let value = input.value.trim().toLowerCase()

    for (let i = 0; i < contacts.length; i++) {
        if (value === contacts[i].name.toLowerCase()) {
            p.innerHTML = `Contato encontrado:<br>
            Nome: ${contacts[i].name}<br>
            Tel: ${contacts[i].number}`
            found = true
            break
        }
    }

    if (!found) {
        p.innerHTML = "Contato não encontrado, tente novamente!"
    }
}