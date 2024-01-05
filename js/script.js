document.getElementById('Button_submit').addEventListener('click',function(){
    const emailField = document.getElementById('Email');
    const email = emailField.value;

    const passField = document.getElementById('Password');
    const passWord = passField.value;

    if(email === 'sksb@gmail.com' && passWord === 'sksb'){
        window.location.href ='bank.html'

    }
    else{
        alert("Wrong information");
    }
})