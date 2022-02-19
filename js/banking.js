// select input value func
function getInputValue(inputId) {
  const inputValue = document.getElementById(inputId);
  const inputText = inputValue.value;
  if (isNaN(inputText)) {
    alert("Please only number");
  } else if (inputText < 0) {
    alert("Please value more than 0!");
  } else {
    const inputTotal = parseFloat(inputText);
    // clear input value
    inputValue.value = "";
    return inputTotal;
  }
}

// add Amount funct
function getAmount(addAmount) {
  const amountValue = document.getElementById(addAmount);
  const amountText = amountValue.innerText;
  const amountTotal = parseFloat(amountText);
  return amountTotal;
}

// add click event
document.getElementById("deposit-submit").addEventListener("click", () => {
  const inputValue = getInputValue("deposit-input");
  const depositDmount = getAmount("deposit-total");
  const totalDeposit = inputValue + depositDmount;
  if (totalDeposit > 0) {
    const depositValue = (document.getElementById("deposit-total").innerText =
      totalDeposit);
    const blance = getAmount("balance-total");
    const totalBalance = blance + depositValue;
    document.getElementById("balance-total").innerText = totalBalance;
  }
});
// add click event
document.getElementById("withdraw-submit").addEventListener("click", () => {
  const inputValue = getInputValue("withdraw-input");
  const withdrawAmount = getAmount("Withdraw-total");
  const blance = getAmount("balance-total");
  const withdrawTotal = inputValue + withdrawAmount;
  if (withdrawTotal > 0 && blance >= inputValue) {
    const withdraw = document.getElementById("Withdraw-total");
    withdraw.innerText = withdrawTotal;
    const totalBalance = blance - inputValue;
    document.getElementById("balance-total").innerText = totalBalance;
  }
});
