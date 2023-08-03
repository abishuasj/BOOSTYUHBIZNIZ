function handleGreyButtonClick() {
  window.location.href = 'index.html'; 
}


const greyButton = document.querySelector('.grey-button');
greyButton.addEventListener('click', handleGreyButtonClick);

let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}


let balance = 2340000.65; 


function openCustomAmountPopup() {
  let customAmountPopup = document.getElementById("custom-amount-popup");
  customAmountPopup.classList.add("open-popup");
}

function closeCustomAmountPopup() {
  let customAmountPopup = document.getElementById("custom-amount-popup");
  customAmountPopup.classList.remove("open-popup");
}



let customAmountButtonClicked = false;


function confirmCustomAmount() {
  
  showAgreementMessage(); 

  if (!customAmountButtonClicked) {
    const customAmountButton = document.getElementById("custom-amount-button");
    customAmountButton.disabled = true;
    customAmountButtonClicked = true;
  } else {
    showInstaLoanMessage();
  }
}

function showAgreementMessage() {
  let agreementMessage = document.getElementById("agreement-message");
  agreementMessage.classList.add("open-popup");
}

function closeAgreementMessage() {
  let agreementMessage = document.getElementById("agreement-message");
  agreementMessage.classList.remove("open-popup");
}

function showInstaLoanMessage() {
  let instaLoanMessage = document.getElementById("insta-loan-message");
  instaLoanMessage.classList.add("open-popup");
}

function closeInstaLoanMessage() {
  let instaLoanMessage = document.getElementById("insta-loan-message");
  instaLoanMessage.classList.remove("open-popup");
}

function updateBalanceAndClosePopup() {
  let amountInput = document.getElementById("amount-input");
  let customAmount = parseFloat(amountInput.value);

  if (!isNaN(customAmount) && customAmount > 0) {
    balance += customAmount; 
    document.getElementById("account-balance").textContent = balance.toFixed(2);
  }

  closeAgreementMessage();
}