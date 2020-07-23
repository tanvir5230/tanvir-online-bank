let loginButton = document.getElementById("login-btn");
let depositBtn = document.getElementById("deposit-btn");
let depositInput = document.getElementById("deposit");
let depositArea = document.getElementById("deposit-value");
let withdrawInput = document.getElementById("withdraw");
let withdrawBtn = document.getElementById("withdraw-btn");
let totalBalanceArea = document.getElementById("total");
loginButton.addEventListener("click", function () {
  let accountingArea = document.getElementById("accounting-area");
  let loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  accountingArea.style.display = "block";
});
function deposit() {
  let depositedValue = parseFloat(depositArea.innerText);
  let totalBalance = parseFloat(totalBalanceArea.innerText);

  let depositInputValue = parseFloat(depositInput.value);
  if (depositInputValue > 0) {
    depositedValue += depositInputValue;
    totalBalance += depositInputValue;
    totalBalanceArea.innerText = totalBalance;
    depositArea.innerText = depositedValue;
    depositInput.value = "";
    depositInput.focus();
  }
}

depositBtn.addEventListener("click", deposit);
depositInput.addEventListener("keypress", function () {
  if (event.keyCode === 13) {
    deposit();
  }
});
function withdraw() {
  let withdrawValueContainer = document.getElementById("withdraw-value");
  let withdrawedValue = parseFloat(withdrawValueContainer.innerText);
  let withdrawInputValue = parseFloat(withdrawInput.value);
  let totalBalanceValue = parseFloat(totalBalanceArea.innerText);
  if (withdrawInputValue > 0 && withdrawInputValue <= totalBalanceValue) {
    withdrawedValue += withdrawInputValue;
    withdrawValueContainer.innerText = withdrawedValue;
    let totalBalance = parseFloat(totalBalanceArea.innerText);
    totalBalance -= withdrawInputValue;
    totalBalanceArea.innerText = totalBalance;
    withdrawInput.value = "";
    withdrawInput.focus();
  } else {
    alert("you can't withdraw money.");
  }
}
withdrawBtn.addEventListener("click", withdraw);
withdrawInput.addEventListener("keypress", function () {
  if (event.keyCode === 13) {
    withdraw();
  }
});
