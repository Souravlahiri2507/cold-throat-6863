let cart_value = JSON.parse(localStorage.getItem("cart-value"));
    console.log(cart_value);

    let heading = document.createElement("h1");
    heading.innerText = cart_value;

   document.querySelector("#head").append(heading);