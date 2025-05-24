
const desc = document.getElementById("desc")
const amount = document.getElementById("amount")
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const transactionList = document.getElementById("transactionList")
const balance = document.getElementById("balance")

incomeBtn.addEventListener("click", addToIncome)
expenseBtn.addEventListener("click", addToExpense)

let incomeArray = []
let expenseArray = []


function addToIncome(){
    const beskrivning = desc.value
    const belopp = Number(amount.value)
    const object = { beskrivning, belopp }

    const existing = incomeArray.find(item => item.beskrivning === beskrivning)
    if (existing) {
        existing.belopp = belopp
    } else {
        incomeArray.push(object)
    }

    display('incomeList', incomeArray, 'Inkomst')

    resetInputs()

    calculateBalance()
}


function resetInputs() {
    desc.value = ''
    amount.value = '' 
}

function addToExpense() {
    const beskrivning = desc.value
    const belopp = Number(amount.value)
    const object = { beskrivning, belopp }

    const existing = expenseArray.find(item => item.beskrivning === beskrivning)
    if (existing) {
        existing.belopp = belopp
    } else {
        expenseArray.push(object)
    }

    display('expenseList', expenseArray, 'Utgift')

    resetInputs()

    calculateBalance()
    
}

function calculateBalance() {
    let balanceValue = 0
    // calculate income
    for (const object of incomeArray) {
        balanceValue = balanceValue + object.belopp
    } 

    // calculate expense
    for (const object of expenseArray) {
        balanceValue = balanceValue - object.belopp
    }

    document.getElementById('balance').innerHTML = balanceValue
}

function display(elemantId, items, description) {
    document.getElementById(elemantId).innerHTML = ''
    for (const object of items) {
        document.getElementById(elemantId).innerHTML += '<li>' + object.beskrivning + ' - ' + object.belopp + ` kr (${description})` + '</li>'
    }
}