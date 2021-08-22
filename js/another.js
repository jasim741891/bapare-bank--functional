function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId)
    const inputText = inputField.value
    const inputAmount = parseFloat(inputText);
    inputField.value = '';
    return inputAmount;
};
function updateTotal(fieldId, amount) {

    // const totalTag = document.getElementById(fieldId);
    // const totalText = totalTag.innerText;
    // const totalAmount = parseFloat(totalText);
    const totalAmount = getInputInnerTex(fieldId)
    const newTotal = totalAmount + amount
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;

};
function getInputInnerTex(fieldId) {
    const innerTag = document.getElementById(fieldId);
    const innerInputText = innerTag.innerText;
    const innerAmount = parseFloat(innerInputText);
    return innerAmount;
}
function updateBalance(amount, isadd) {
    // const balanceTag = document.getElementById('balance-total');
    // const balanceText = balanceTag.innerText;
    // const balanceAmount = parseFloat(balanceText);


    const balanceAmount = getInputInnerTex('balance-total')
    let newUpdateBalance;
    if (isadd == true) {
        newUpdateBalance = balanceAmount + amount;
    }
    else {
        newUpdateBalance = balanceAmount - amount;
    }

    document.getElementById('balance-total').innerText = newUpdateBalance;

}


document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true)
    }
});
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balanceTotalUp = getInputInnerTex('balance-total')
    if (amount > 0 && amount <= balanceTotalUp) {
        updateTotal('withdraw-total', amount)
        updateBalance(amount, false)
    }
})