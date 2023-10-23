function createAccount(initialPin, initialAmount = 0) {
  let balance = initialAmount;
  let pin = initialPin;

  return {
    checkBalance: function (inputPin) {
      if (inputPin !== pin) {
        return "Invalid PIN.";
      }
      return `$${balance}`;
    },
    deposit: function (inputPin, depositAmount) {
      if (inputPin !== pin) {
        return "Invalid PIN.";
      }
      balance += depositAmount;
      return `Succesfully deposited $${depositAmount}. Current balance: $${balance}.`;
    },
    withdraw: function (inputPin, withdrawAmount) {
      if (inputPin !== pin) {
        return "Invalid PIN.";
      }
      if (withdrawAmount > balance) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
      balance -= withdrawAmount;
      return `Succesfully withdrew $${withdrawAmount}. Current balance: $${balance}.`;
    },
    changePin: function (oldPin, newPin) {
      if (oldPin !== pin) {
        return "Invalid PIN.";
      }
      pin = newPin;
      return "PIN successfully changed!";
    },
  };
}

module.exports = { createAccount };
