let myBalance = 10000;
let myPin = 1234;

// Handle PIN submit
document.getElementById('pin-submit').addEventListener('click', function () {
  const pinInput = document.getElementById('pin').value;
  const pinMessage = document.getElementById('pin-message');
  if (parseInt(pinInput) === myPin) {
    pinMessage.textContent = "Correct PIN!";
    document.getElementById('operation-section').style.display = "block";
    document.getElementById('pin-section').style.display = "none";
  } else {
    pinMessage.textContent = "Invalid PIN!";
  }
});

// Handle Withdraw operation
document.getElementById('withdraw').addEventListener('click', function () {
  document.getElementById('withdraw-section').style.display = "block";
  document.getElementById('operation-section').style.display = "none";
});

document.getElementById('withdraw-submit').addEventListener('click', function () {
  const amount = parseInt(document.getElementById('withdraw-amount').value);
  const withdrawMessage = document.getElementById('withdraw-message');
  if (amount <= myBalance) {
    myBalance -= amount;
    withdrawMessage.textContent = "Withdrawal successful! Your remaining balance is: " + myBalance;
  } else {
    withdrawMessage.textContent = "Insufficient balance!";
  }
});

// Handle Check Balance operation
document.getElementById('check-balance').addEventListener('click', function () {
  document.getElementById('balance-section').style.display = "block";
  document.getElementById('balance').textContent = myBalance;
  document.getElementById('operation-section').style.display = "none";
});

// Handle Fast Cash operation
document.getElementById('fast-cash').addEventListener('click', function () {
  document.getElementById('fast-cash-section').style.display = "block";
  document.getElementById('operation-section').style.display = "none";
});

document.querySelectorAll('.fast-cash-option').forEach(button => {
  button.addEventListener('click', function () {
    const amount = parseInt(button.getAttribute('data-amount'));
    if (amount <= myBalance) {
      myBalance -= amount;
      document.getElementById('fast-cash-message').textContent = "Fast Cash successful! Your remaining balance is: " + myBalance;
    } else {
      document.getElementById('fast-cash-message').textContent = "Insufficient balance!";
    }
  });
});
