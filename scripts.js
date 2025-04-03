const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectOne = document.querySelector(".currency-select-one")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")



    const dolarToday = 5.6
    const euroToday = 6.1
    const libraToday = 7.3
    const bitcoinToday = 475.79
    const realToday = 1.0

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8,
            maximumFractionDigits: 8
        }).format(inputCurrencyValue / bitcoinToday)

    }

    if (currencySelect.value == "real") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue / realToday)
}

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    convertValues()
}

function changeCurrencyOne() {
    const currencyNameOne = document.getElementById("currency-name-one")
    const currencyImageReal = document.querySelector(".currency-img-real")

    if (currencySelectOne.value == "dolar") {
        currencyNameOne.innerHTML = "Dólar americano"
        currencyImageReal.src = "./assets/dolar.png"
    }

    if (currencySelectOne.value == "euro") {
        currencyNameOne.innerHTML = "Euro"
        currencyImageReal.src = "./assets/euro.png"
    }

    if (currencySelectOne.value == "libra") {
        currencyNameOne.innerHTML = "Libra"
        currencyImageReal.src = "./assets/libra.png"
    }

    if (currencySelectOne.value == "bitcoin") {
        currencyNameOne.innerHTML = "Bitcoin"
        currencyImageReal.src = "./assets/bitcoin.png"
    }

    if (currencySelectOne.value == "real") {
        currencyNameOne.innerHTML = "Real"
        currencyImageReal.src = "./assets/real.png"
    }
}

currencySelectOne.addEventListener("change", changeCurrencyOne)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)