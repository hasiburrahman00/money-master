const income = document.getElementById('income');
const food = document.getElementById('food');
const rent = document.getElementById('rent');
const cloths = document.getElementById('cloths');
const calculate = document.getElementById('calculate');
const totalExpance = document.getElementById('total-expance');
const netBalance = document.getElementById('balance');
const savePercent = document.getElementById('save');
const savingBtn = document.getElementById('saving-btn');
const savingAmount = document.getElementById('saving-amount');
const remainingBlance = document.getElementById('remain-balance')



function calculator(income, food, rent, cloths) {
    let myIncome = income.value;
    let myFood = food.value;
    let myRent = rent.value;
    let MyCloths = cloths.value;

    if (myIncome.length === 0 || myFood.length === 0 || myRent.length === 0 || MyCloths.length === 0) {
        window.alert('Input Filled Required');
        income.value = '';
        food.value = '';
        cloths.value = '';
        rent.value = '';
        return ['', ''];
    } else {
        const totalExpance = parseFloat(myRent) + parseFloat(myFood) + parseFloat(MyCloths);
        income.value = '';
        food.value = '';
        cloths.value = '';
        rent.value = '';
        const balance = parseFloat(myIncome) - totalExpance;

        if (totalExpance > balance) {
            window.alert("Expance is greater then Income !!!")
            return [0, 0];
        } else {
            return [totalExpance, balance];
        }


    }
}


function percentCalculate(percent) {
    console.log(percent);
    if (percent.length === 0) {
        window.alert("Empty Input Field !!!");
        return 0;
    } else {
        const percentNumber = parseFloat(percent);
        const prevBalance = parseFloat(netBalance.innerText);
        return (percentNumber / 100) * prevBalance;
    }
}



calculate.addEventListener('click', function () {
    const expance = calculator(income, food, rent, cloths);

    totalExpance.innerText = expance[0];
    netBalance.innerText = expance[1];

})

savingBtn.addEventListener('click', function () {
    const saving = percentCalculate(savePercent.value);
    savingAmount.innerText = saving;

    remainingBlance.innerText = parseFloat(netBalance.innerText) - saving;



})