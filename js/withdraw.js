document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Get the withdraw amount
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawField.value);

    // Get the Withdraw Total Elements value
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotal = parseFloat(withdrawTotalElement.innerText);

    // Calculating new Withdraw Total value
    let newWithdrawTotal;
    if (isNaN(withdrawAmount)) {
        newWithdrawTotal = withdrawTotal;
    } else {
        newWithdrawTotal = withdrawTotal + withdrawAmount;
    }

    // Updating new withdraw total amount
    withdrawTotalElement.innerText = newWithdrawTotal.toFixed(2);
    // Making the input field empty after withdraw
    withdrawField.value = '';

    // Update Balance
    balanceTotalElement = document.getElementById('balance-total');
    balanceTotal = parseFloat(balanceTotalElement.innerText);
    if (balanceTotal < withdrawAmount) {
        return alert("Baap er Bank e Taka nai");
    }
    if (isNaN(parseFloat(withdrawAmount))) {
        balanceTotalElement.innerText = balanceTotal.toFixed(2);
    } else {
        balanceTotalElement.innerText = (balanceTotal - parseFloat(withdrawAmount)).toFixed(2);
    }
});