//Direct the customer to the customerView page
window.onload = function(){
    let customerButton = document.getElementById("customer");
    customerButton.onclick = function(e){
        e.preventDefault();
        window.open("../Customer View/customerView_Page.html");
    }
}


//Direct the admin to the adminView page