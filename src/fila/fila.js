const buttonRemove = document.querySelector(".remove")
const buttonAdd = document.querySelector(".add")
const containerFila = document.querySelector(".container-fila")
const input = document.querySelector(".inputValue")

// Na estrutura fila o primeiro a entrar é o primeiro a sair

const arrayFila = []

buttonAdd.addEventListener("click", () => {
    if(input.value === "") return alert("Campo vazio, Insira um valor.")
    if(arrayFila.length === 5) return alert("A fila está cheia no momento, aguarde alguem sair.")
    containerFila.innerHTML = ""

    arrayFila.push(input.value)
    console.log(arrayFila)

    arrayFila.map((items) => {
        containerFila.innerHTML += `<p>${items}</p> </br>`
    })

    input.value = ""
})

buttonRemove.addEventListener("click", () => {
    if(arrayFila.length === 0) return alert("Lista Vazia") 
    containerFila.innerHTML = ""

    arrayFila.shift()
    console.log(arrayFila)

    arrayFila.map((items) => {
        containerFila.innerHTML += `<p>${items}</p> </br>`
    })
})

