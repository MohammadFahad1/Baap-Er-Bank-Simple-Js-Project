document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;

    // Update Total Balance
    let newTotalDeposit;
    if (isNaN(parseFloat(depositAmount))) {
        newTotalDeposit = parseFloat(depositTotal) + 0;
    } else {
        newTotalDeposit = parseFloat(depositTotal) + parseFloat(depositAmount);
    }
    depositTotalElement.innerText = newTotalDeposit.toFixed(2);

    // Make Field Empty After submtting the form
    depositField.value = '';

    // Update Balance
    balanceTotalElement = document.getElementById('balance-total');
    balanceTotal = parseFloat(balanceTotalElement.innerText);

    if (isNaN(parseFloat(depositAmount))) {
        balanceTotalElement.innerText = (balanceTotal + 0).toFixed(2);
    } else {
        balanceTotalElement.innerText = (balanceTotal + parseFloat(depositAmount)).toFixed(2);
    }
});