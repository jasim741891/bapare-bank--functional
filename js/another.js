function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId)
    const inputText = inputField.value
    const inputAmount = parseFloat(inputText);
    inputField.value = '';
    return inputAmount;
};
function updateTotal(fieldId, amount) {
    console.log(fieldId, amount)
    const totalTag = document.getElementById(fieldId);
    const totalText = totalTag.innerText;
    const totalAmount = parseFloat(totalText);
    const newTotal = totalAmount + amount
    totalTag.innerText = newTotal;
    return newTotal;

};
function updateBalance(amount, isadd) {
    const balanceTag = document.getElementById('balance-total');
    const balanceText = balanceTag.innerText;
    const balanceAmount = parseFloat(balanceText);
    let newUpdateBalance;
    if (isadd == true) {
        newUpdateBalance = balanceAmount + amount;
    }
    else {
        newUpdateBalance = balanceAmount - amount;
    }

    balanceTag.innerText = newUpdateBalance;

}


document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    updateTotal('deposit-total', amount);
    updateBalance(amount, true)
});
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    updateTotal('withdraw-total', amount)
    updateBalance(amount, false)
})