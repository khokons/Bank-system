// step-1,Where click Event

document.getElementById('Button_diposit').addEventListener('click',function(){
//    Step 2------------------

const depositeValue = document.getElementById('Deposite');
const newdepositeAmountString = depositeValue.value;
const newDepositNumber = parseFloat(newdepositeAmountString);


// step -3-----------
const depositeBalance = document.getElementById('deposite_balance');
const priviousDepositeAmount =depositeBalance.innerText;
const depositeAmountNumber =parseFloat(priviousDepositeAmount);
// Step number ----4
const currentAmount = depositeAmountNumber + newDepositNumber;

depositeBalance.innerText = currentAmount;

// step-5------------
const balenceTotalElement= document.getElementById('Total_balence');
const PriviousBalenceString = balenceTotalElement.innerText;
const previousBalence = parseFloat(PriviousBalenceString);

// Step-6------------
const currentBalence = previousBalence + newDepositNumber;

balenceTotalElement.innerText = currentBalence;



depositeValue.value = '';
})