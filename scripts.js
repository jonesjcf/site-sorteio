
const buttonDraw = document.querySelector(".button-draw")

function generateNumber() {
    const inputMin = Math.ceil(document.querySelector(".input-min").value)
    const inputMax = Math.floor(document.querySelector(".input-max").value)

    if (inputMax > inputMin) {
        const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin

        alert(result)

    } else {
        alert("O valor MÍNIMO deve ser menor que o valor MÁXIMO!");
    }


}


buttonDraw.addEventListener("click", generateNumber)

