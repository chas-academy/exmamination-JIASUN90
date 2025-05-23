
const desc = document.getElementById("desc")
const amount = document.getElementById("amount")
const incomeBtn = document.getElementById("incomeBtn")
const expenseBtn = document.getElementById("expenseBtn")
const incomeList = document.getElementById("incomeList")
const expenseList = document.getElementById("expenseList")
const transactionList = document.getElementById("transactionList")
const balance = document.getElementById("balance")

let incomeArray = []
let expenseArray = []


function addToIncome(){
    const beskrivning = desc.value
    const belopp = Number(amount.value)
    const object = { beskrivning, belopp }

    if (incomeArray.length > 0) {
        for (const item of incomeArray) {
            if (item.beskrivning === beskrivning) {
                item.belopp = belopp
            } else {
                incomeArray.push(object)
            }
        } 
    } else {
        incomeArray.push(object) 
    }

    displayIncome()

    resetInputs()

    calculateBalance()
}

function displayIncome() {
    document.getElementById('incomeList').innerHTML = '' 
    for (const object of incomeArray) {
        document.getElementById('incomeList').innerHTML += '<li>' + object.beskrivning + ': ' + object.belopp + '</li>'
    }
}

function resetInputs() {
    desc.value = ''
    amount.value = '' 
}

function addToExpense() {
    const beskrivning = desc.value
    const belopp = Number(amount.value)
    const object = { beskrivning, belopp }

    if (expenseArray.length > 0) {
        for (const item of expenseArray) {
            if (item.beskrivning === beskrivning) {
                item.belopp = belopp
            } else {
                expenseArray.push(object)
            }
        } 
    } else {
        expenseArray.push(object) 
    }

    displayExpense()

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

function displayExpense() {
    document.getElementById('expenseList').innerHTML = '' 
    for (const object of expenseArray) {
        document.getElementById('expenseList').innerHTML += '<li>' + object.beskrivning + ': ' + object.belopp + '</li>'
    }
}