let check_alert = document.querySelectorAll(".hotel-rating>a>button");
for(let i=0;i<check_alert.length;i++){
    check_alert[i].addEventListener("click",myFun);
}
function myFun(){
    alert("You are moving towards the Checkout Page");

    let cart = document.querySelector(".rate-child-second").innerText;
    
    localStorage.setItem("cart-value",JSON.stringify(cart));
}