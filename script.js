


 function validate(callback){
     
    var username=document.getElementById('username');
     var password=document.getElementById('password');


if(username.value=="admin" && password.value=="12345"){
    
        callb();
    }
  
    else{
        return false
}  
 }  

function callb(){
    window.location.href="todo.html";
}

username.addEventListener('blur',function callback1(n){
    if(n.target.value=="admin"){
        username.style.borderColor="green";
    }
    else{
        username.style.borderColor="red";
        alert("Inproper validation");
    }
})
password.addEventListener('blur',function callback2(p){
    if(p.target.value=="12345"){
        password.style.borderColor="green";
    }
    else{
        password.style.borderColor="red";
        alert("inproper validation");
    }
})