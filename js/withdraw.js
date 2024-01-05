document.getElementById('withdraw_btn').addEventListener('click',function(){
   
const withDrawBtn = document.getElementById('withdraw');
const withdrawString =withDrawBtn.value;
const withdrawx = parseFloat(withdrawString);

withDrawBtn.value = '';

if(isNaN(withdrawx)){
    alert('Please provide a valid number');
    return;
}


const withdrawElement = document.getElementById('total_withdraw');
const withdrawElementString =withdrawElement.innerText;
const withdrawElements = parseFloat(withdrawElementString);

const  totalWithdrawAmout = withdrawElements + withdrawx;


withdrawElement.innerText=totalWithdrawAmout;


// step-6------------

const newBalnece = document.getElementById('Total_balence');
const balenceString = newBalnece.innerText;
const finalBalence = parseFloat(balenceString);



if(withdrawx > finalBalence){
    alert('Not a satisfied balance')
    return;
}


const xBalence = finalBalence-withdrawx;

newBalnece.innerText =xBalence;






}) 









/* const withDrawAmount =document.getElementById('withdraw_Amount');
const withdrawAmountElement = withDrawAmount.innerText;
const elementFloatAmount= parseFloat(withdrawAmountElement);



const totalWithdraw = elementFloatAmount + withdrawx;

withDrawAmount.innerText = totalWithdraw;


withDrawBtn.value = '';
 */