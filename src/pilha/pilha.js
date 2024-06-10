const buttonRemove = document.querySelector(".remove")
const buttonAdd = document.querySelector(".add")
const containPilha = document.querySelector(".container-pilha")
const input = document.querySelector(".inputValue")

// Na estrutura pilha o último a entrar é o primeiro a sair


const arrayPilha = []

buttonAdd.addEventListener("click", () => {
    if(arrayPilha.length === 10) return alert("A lista está cheia, para adicionar novos nomes é necessario remover alguns.")
    if(input.value === "") return alert("Campo vazio, Insira um valor.")
    containPilha.innerHTML = ""

    arrayPilha.unshift(input.value)
    console.log(arrayPilha)

    arrayPilha.map((items) => {
        containPilha.innerHTML += `<p>${items}</p> </br>`
    })

    input.value = ""
})



buttonRemove.addEventListener("click", () => {
    if(arrayPilha.length === 0) return alert("Lista vazia")
    containPilha.innerHTML = ""


    arrayPilha.shift()

    console.log(arrayPilha)

    arrayPilha.map((items) => {
        containPilha.innerHTML += `<p>${items}</p> </br>`
    })
})
