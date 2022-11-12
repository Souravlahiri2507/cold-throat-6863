let reg_mail = JSON.parse(localStorage.getItem("register_data"));

console.log(reg_mail);

let loginArr = [];

document.getElementById("login-button").addEventListener("click",myFun);

function myFun(){
    let login_mail = document.querySelector("#login-email").value;

    loginArr.push(login_mail);

    console.log(loginArr);

    for(let i=0;i<reg_mail.length;i++){
        if(reg_mail[i]==loginArr){
            alert("You are already a registered Customer");
        } else{
            alert("Please register first");
        }
    }
}