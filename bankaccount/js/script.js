
function userBank () {
let bankAccount = function (ownerName) {
        let balance = 0;
        let owner = ' ';
    
    function withdrawal (withdrawalAmount) {
        balance = balance + parseFloat(withdrawalAmount);
        userBalance();
    }

    function deposit(depositAmount) {
        balance = balance + parseFloat(depositAmount);
        userBalance();
    }
    function getBalance() {
        document.getElementById('info').value = balance;
    }
    function getOwnerName() {
        document.getElementById('name').value = owner;
    }

    function userBalance() {
        getOwnerName();
        getBalance()
    }

   
    return {bankAccount,
           withdrawal,
           deposit,
           getBalance,
           getOwnerName,
           userBalance,
          
    }


}
}
document.querySelector("#name").addEventListener("click", function() {                        
    bankAccount.ownerName(prompt("Please enter your name"));
});

document.querySelector("deposit").addEventListener("click", function() {        
    bankAccount.deposit(prompt("Please enter an amount you want to deposit"));          
});

document.querySelector("withdrawal").addEventListener("click", function() {        
    bankAccount.withdrawal(prompt("Please enter an amount you want to withdraw"));
});   

function prompt(validNumber) {
    let amount = 0;
    do { 
        amount = prompt(validNumber);
    } while (!isValidNumber(amount))

    return amount;
}

function isValidNumber(value) {        
    if (isNaN(parseFloat(value))) {
        alert('Please, enter a valid amount');            
        return false;
    }

    return true;
}




