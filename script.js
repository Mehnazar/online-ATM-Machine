let myBalance = 10000;
let myPin = 1234;

// Helper function to hide all sections
function hideAllSections() {
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
}

// Helper function to go back to operation selection
function showOperationSection() {
  hideAllSections();
  document.getElementById('operation-section').style.display = 'block';
}

// Handle PIN submit
document.getElementById('pin-submit').addEventListener('click', function () {
  const pinInput = document.getElementById('pin').value;
  const pinMessage = document.getElementById('pin-message');
  if (parseInt(pinInput) === myPin) {
    pinMessage.textContent = "Correct PIN!";
    showOperationSection();
    document.getElementById('pin-section').style.display = "none";
  } else {
    pinMessage.textContent = "Invalid PIN!";
  }
});

// Handle Withdraw operation
document.getElementById('withdraw').addEventListener('click', function () {
  hideAllSections();
  document.getElementById('withdraw-section').style.display = "block";
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
  hideAllSections();
  document.getElementById('balance-section').style.display = "block";
  document.getElementById('balance').textContent = myBalance;
});

// Handle Fast Cash operation
document.getElementById('fast-cash').addEventListener('click', function () {
  hideAllSections();
  document.getElementById('fast-cash-section').style.display = "block";
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

// Handle Back button functionality
document.querySelectorAll('.back-button').forEach(button => {
  button.addEventListener('click', function () {
    showOperationSection();
  });
});
