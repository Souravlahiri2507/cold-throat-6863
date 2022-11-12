    let emailArr = JSON.parse(localStorage.getItem("register_data"))||[];
    document.getElementById("login-button").addEventListener("click",myFun);
    function myFun(){
        alert(document.getElementById("login-email").value+" "+"Successfully Registered");

        let mail = document.querySelector("#login-email").value;
        emailArr.push(mail);
        console.log(emailArr);

        localStorage.setItem("register_data",JSON.stringify(emailArr));
    }

